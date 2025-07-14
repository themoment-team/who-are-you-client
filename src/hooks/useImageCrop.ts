import { useEffect, useState } from 'react';

const FACE_DETECTION_CONFIG = {
  // 얼굴 영역 확장 비율
  EXPAND_RATIO: 0.15,
  // 크롭 크기 배율 (짧은 변 기준)
  CROP_SIZE_MULTIPLIER: 1.2,
  // 중앙 영역 추정 시 얼굴 크기 비율
  CENTER_FACE_SIZE_RATIO: 0.4,
  // 이미지 품질 (JPEG 압축률)
  IMAGE_QUALITY: 0.9,
} as const;

const SKIN_COLOR_RANGES = {
  // 밝은 피부
  LIGHT_SKIN: { hMin: 0, hMax: 50, sMin: 0.23, sMax: 0.68, vMin: 0.35 },
  // 중간 피부
  MEDIUM_SKIN: { hMin: 0, hMax: 50, sMin: 0.2, sMax: 0.8, vMin: 0.25 },
  // 어두운 피부
  DARK_SKIN: { hMin: 0, hMax: 50, sMin: 0.15, sMax: 0.85, vMin: 0.15 },
  // 황인종 피부 (노란빛)
  ASIAN_SKIN: { hMin: 10, hMax: 50, sMin: 0.15, sMax: 0.75, vMin: 0.2 },
} as const;

const FACE_VALIDATION_CONFIG = {
  // 얼굴 비율 범위 (가로/세로)
  MIN_ASPECT_RATIO: 0.5,
  MAX_ASPECT_RATIO: 2.0,
  // 얼굴 영역 크기 비율 (전체 이미지 대비)
  MIN_AREA_RATIO: 0.01,
  MAX_AREA_RATIO: 0.8,
  // 최소 얼굴 크기 (픽셀)
  MIN_FACE_WIDTH: 50,
  MIN_FACE_HEIGHT: 50,
  // 중심 위치 허용 편차 (이미지 크기 대비)
  MAX_CENTER_DEVIATION: 0.3,
} as const;

// ===== 타입 정의 =====
export enum ObjectFit {
  COVER = 'cover',
  CONTAIN = 'contain',
}

interface UseImageCropResult {
  processedImageUrl: string;
  objectFit: ObjectFit;
  isProcessing: boolean;
}

interface FaceRect {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
}

interface FloodFillResult {
  area: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

// ===== 유틸리티 함수들 =====
const convertToHSV = (r: number, g: number, b: number) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0;
  if (diff !== 0) {
    if (max === r) {
      h = ((g - b) / diff) % 6;
    } else if (max === g) {
      h = (b - r) / diff + 2;
    } else {
      h = (r - g) / diff + 4;
    }
  }
  h = (h * 60 + 360) % 360;

  const s = max === 0 ? 0 : diff / max;
  const v = max / 255;

  return { h, s, v };
};

const isSkinColor = (r: number, g: number, b: number): boolean => {
  const { h, s, v } = convertToHSV(r, g, b);

  const ranges = Object.values(SKIN_COLOR_RANGES);
  return ranges.some(
    (range) =>
      h >= range.hMin &&
      h <= range.hMax &&
      s >= range.sMin &&
      s <= range.sMax &&
      v >= range.vMin
  );
};

const isValidFaceRegion = (
  region: FaceRect,
  width: number,
  height: number
): boolean => {
  const aspectRatio = region.width / region.height;
  const areaRatio = (region.width * region.height) / (width * height);

  // 얼굴 비율 체크
  if (
    aspectRatio < FACE_VALIDATION_CONFIG.MIN_ASPECT_RATIO ||
    aspectRatio > FACE_VALIDATION_CONFIG.MAX_ASPECT_RATIO
  ) {
    return false;
  }

  // 크기 체크
  if (
    areaRatio < FACE_VALIDATION_CONFIG.MIN_AREA_RATIO ||
    areaRatio > FACE_VALIDATION_CONFIG.MAX_AREA_RATIO
  ) {
    return false;
  }

  // 최소 크기 체크
  if (
    region.width < FACE_VALIDATION_CONFIG.MIN_FACE_WIDTH ||
    region.height < FACE_VALIDATION_CONFIG.MIN_FACE_HEIGHT
  ) {
    return false;
  }

  return true;
};

// ===== 핵심 얼굴 감지 함수들 =====
const createSkinColorMap = (
  imageData: ImageData,
  width: number,
  height: number
): boolean[][] => {
  const skinMap: boolean[][] = [];
  const data = imageData.data;

  for (let y = 0; y < height; y++) {
    skinMap[y] = [];
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      skinMap[y][x] = isSkinColor(r, g, b);
    }
  }

  return skinMap;
};

const performMorphologyOperations = (
  skinMap: boolean[][],
  width: number,
  height: number
): boolean[][] => {
  // Erosion (침식)
  const eroded = skinMap.map((row) => [...row]);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      if (skinMap[y][x]) {
        let allNeighborsSkin = true;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (!skinMap[y + dy][x + dx]) {
              allNeighborsSkin = false;
              break;
            }
          }
          if (!allNeighborsSkin) break;
        }
        eroded[y][x] = allNeighborsSkin;
      }
    }
  }

  // Dilation (팽창)
  const dilated = eroded.map((row) => [...row]);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      if (!eroded[y][x]) {
        let hasNeighborSkin = false;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (eroded[y + dy][x + dx]) {
              hasNeighborSkin = true;
              break;
            }
          }
          if (hasNeighborSkin) break;
        }
        dilated[y][x] = hasNeighborSkin;
      }
    }
  }

  return dilated;
};

const performFloodFill = (
  skinMap: boolean[][],
  visited: boolean[][],
  startX: number,
  startY: number,
  width: number,
  height: number
): FloodFillResult => {
  const stack: Array<[number, number]> = [[startX, startY]];
  let area = 0;
  let minX = startX,
    maxX = startX,
    minY = startY,
    maxY = startY;

  while (stack.length > 0) {
    const [x, y] = stack.pop()!;

    if (
      x < 0 ||
      x >= width ||
      y < 0 ||
      y >= height ||
      visited[y][x] ||
      !skinMap[y][x]
    ) {
      continue;
    }

    visited[y][x] = true;
    area++;

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);

    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  return { area, minX, maxX, minY, maxY };
};

const findLargestSkinRegion = (
  skinMap: boolean[][],
  width: number,
  height: number
): FaceRect | null => {
  const visited: boolean[][] = Array(height)
    .fill(null)
    .map(() => Array(width).fill(false));

  let largestRegion: FaceRect | null = null;
  let maxArea = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (skinMap[y][x] && !visited[y][x]) {
        const region = performFloodFill(skinMap, visited, x, y, width, height);

        if (region.area > maxArea) {
          maxArea = region.area;
          largestRegion = {
            x: region.minX,
            y: region.minY,
            width: region.maxX - region.minX,
            height: region.maxY - region.minY,
            confidence: Math.min(region.area / (width * height * 0.1), 1),
          };
        }
      }
    }
  }

  return largestRegion;
};

const expandFaceRegion = (
  region: FaceRect,
  width: number,
  height: number
): FaceRect => {
  const expandX = region.width * FACE_DETECTION_CONFIG.EXPAND_RATIO;
  const expandY = region.height * FACE_DETECTION_CONFIG.EXPAND_RATIO;

  return {
    x: Math.max(0, region.x - expandX),
    y: Math.max(0, region.y - expandY),
    width: Math.min(width - region.x + expandX, region.width + expandX * 2),
    height: Math.min(height - region.y + expandY, region.height + expandY * 2),
    confidence: region.confidence,
  };
};

const detectFaceBySkinColor = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
): FaceRect | null => {
  const imageData = ctx.getImageData(0, 0, width, height);

  // 피부색 픽셀 맵 생성
  const skinMap = createSkinColorMap(imageData, width, height);

  // 모폴로지 연산으로 노이즈 제거
  const cleanedSkinMap = performMorphologyOperations(skinMap, width, height);

  // 가장 큰 피부색 영역 찾기
  const faceRegion = findLargestSkinRegion(cleanedSkinMap, width, height);

  if (faceRegion && isValidFaceRegion(faceRegion, width, height)) {
    return expandFaceRegion(faceRegion, width, height);
  }

  return null;
};

const estimateCenterFaceRegion = (width: number, height: number): FaceRect => {
  const centerX = width / 2;
  const centerY = height / 2;
  const faceSize =
    Math.min(width, height) * FACE_DETECTION_CONFIG.CENTER_FACE_SIZE_RATIO;

  return {
    x: Math.max(0, centerX - faceSize / 2),
    y: Math.max(0, centerY - faceSize / 2),
    width: Math.min(faceSize, width),
    height: Math.min(faceSize, height),
    confidence: 0.3,
  };
};

const cropFaceRegion = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  faceRect: FaceRect
): string => {
  // 얼굴에 더 가깝게 크롭 (짧은 변 기준)
  const cropSize =
    Math.min(faceRect.width, faceRect.height) *
    FACE_DETECTION_CONFIG.CROP_SIZE_MULTIPLIER;
  const centerX = faceRect.x + faceRect.width / 2;
  const centerY = faceRect.y + faceRect.height / 2;

  const cropX = Math.max(0, centerX - cropSize / 2);
  const cropY = Math.max(0, centerY - cropSize / 2);
  const actualCropSize = Math.min(cropSize, width - cropX, height - cropY);

  const croppedCanvas = document.createElement('canvas');
  const croppedCtx = croppedCanvas.getContext('2d');
  if (!croppedCtx) return '';

  croppedCanvas.width = actualCropSize;
  croppedCanvas.height = actualCropSize;

  croppedCtx.drawImage(
    ctx.canvas,
    cropX,
    cropY,
    actualCropSize,
    actualCropSize,
    0,
    0,
    actualCropSize,
    actualCropSize
  );

  return croppedCanvas.toDataURL(
    'image/jpeg',
    FACE_DETECTION_CONFIG.IMAGE_QUALITY
  );
};

// ===== 메인 Hook =====
export const useImageCrop = (imageUrl: string): UseImageCropResult => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>('');
  const [objectFit, setObjectFit] = useState<ObjectFit>(ObjectFit.CONTAIN);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const processImageForFace = async () => {
    setIsProcessing(true);
    try {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = imageUrl;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // 얼굴 감지 시도 (피부색 기반)
      let faceRect = detectFaceBySkinColor(ctx, img.width, img.height);

      // 피부색 감지 실패 시 중앙 영역 추정
      if (!faceRect) {
        faceRect = estimateCenterFaceRegion(img.width, img.height);
      }

      if (faceRect) {
        const croppedImageUrl = cropFaceRegion(
          ctx,
          img.width,
          img.height,
          faceRect
        );
        setProcessedImageUrl(croppedImageUrl);
        setObjectFit(ObjectFit.COVER);
      } else {
        setProcessedImageUrl(imageUrl);
        setObjectFit(ObjectFit.CONTAIN);
      }
    } catch (error) {
      setProcessedImageUrl(imageUrl);
      setObjectFit(ObjectFit.CONTAIN);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (!imageUrl) {
      setProcessedImageUrl('');
      setObjectFit(ObjectFit.CONTAIN);
      return;
    }

    processImageForFace();
  }, [imageUrl]);

  return {
    processedImageUrl,
    objectFit,
    isProcessing,
  };
};
