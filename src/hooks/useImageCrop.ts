"use client";

import { useEffect, useState } from "react";

export enum ObjectFit {
  COVER = "cover",
  CONTAIN = "contain",
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

export const useImageCrop = (imageUrl: string): UseImageCropResult => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  const [objectFit, setObjectFit] = useState<ObjectFit>(ObjectFit.CONTAIN);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (!imageUrl) {
      setProcessedImageUrl("");
      setObjectFit(ObjectFit.CONTAIN);
      return;
    }

    processImageForFace();
  }, [imageUrl]);

  const processImageForFace = async () => {
    setIsProcessing(true);
    try {
      const img = new window.Image();
      img.crossOrigin = "anonymous";

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = imageUrl;
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // 1. 브라우저 Face Detection API 시도
      let faceRect = await tryBrowserFaceDetection(canvas);
      
      // 2. Face Detection API 실패 시 피부색 기반 감지
      if (!faceRect) {
        faceRect = detectFaceBySkinColor(ctx, img.width, img.height);
      }

      // 3. 피부색 감지도 실패 시 중앙 영역 추정
      if (!faceRect) {
        faceRect = estimateCenterFaceRegion(img.width, img.height);
      }

      if (faceRect) {
        const croppedImageUrl = cropFaceRegion(ctx, img.width, img.height, faceRect);
        setProcessedImageUrl(croppedImageUrl);
        setObjectFit(ObjectFit.COVER);
      } else {
        setProcessedImageUrl(imageUrl);
        setObjectFit(ObjectFit.CONTAIN);
      }
    } catch (error) {
      console.error("Face detection failed:", error);
      setProcessedImageUrl(imageUrl);
      setObjectFit(ObjectFit.CONTAIN);
    } finally {
      setIsProcessing(false);
    }
  };

  // 브라우저 Face Detection API 시도
  const tryBrowserFaceDetection = async (canvas: HTMLCanvasElement): Promise<FaceRect | null> => {
    try {
      // @ts-ignore - experimental API
      if ('FaceDetector' in window) {
        // @ts-ignore
        const faceDetector = new window.FaceDetector({
          maxDetectedFaces: 1,
          fastMode: false
        });

        const bitmap = await createImageBitmap(canvas);
        const faces = await faceDetector.detect(bitmap);
        
        if (faces && faces.length > 0) {
          const face = faces[0];
          const boundingBox = face.boundingBox;
          
          return {
            x: boundingBox.x,
            y: boundingBox.y,
            width: boundingBox.width,
            height: boundingBox.height,
            confidence: 0.8
          };
        }
      }
    } catch (error) {
      console.log("Browser Face Detection not available:", error);
    }
    return null;
  };

  // 피부색 기반 얼굴 감지
  const detectFaceBySkinColor = (ctx: CanvasRenderingContext2D, width: number, height: number): FaceRect | null => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    // 피부색 픽셀 맵 생성
    const skinMap: boolean[][] = [];
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

    // 모폴로지 연산으로 노이즈 제거
    const cleanedSkinMap = morphologyOperations(skinMap, width, height);
    
    // 가장 큰 피부색 영역 찾기
    const faceRegion = findLargestSkinRegion(cleanedSkinMap, width, height);
    
    if (faceRegion && isValidFaceRegion(faceRegion, width, height)) {
      return expandFaceRegion(faceRegion, width, height);
    }
    
    return null;
  };

  // 피부색 판별 함수 (여러 인종 고려)
  const isSkinColor = (r: number, g: number, b: number): boolean => {
    // HSV 변환
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

    // 피부색 범위 (다양한 인종 고려)
    const skinConditions = [
      // 밝은 피부
      (h >= 0 && h <= 50 && s >= 0.23 && s <= 0.68 && v >= 0.35),
      // 중간 피부
      (h >= 0 && h <= 50 && s >= 0.20 && s <= 0.80 && v >= 0.25),
      // 어두운 피부
      (h >= 0 && h <= 50 && s >= 0.15 && s <= 0.85 && v >= 0.15),
      // 황인종 피부 (노란빛)
      (h >= 10 && h <= 50 && s >= 0.15 && s <= 0.75 && v >= 0.20),
    ];

    return skinConditions.some(condition => condition);
  };

  // 모폴로지 연산 (노이즈 제거)
  const morphologyOperations = (skinMap: boolean[][], width: number, height: number): boolean[][] => {
    // Erosion (침식)
    const eroded = skinMap.map(row => [...row]);
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
    const dilated = eroded.map(row => [...row]);
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

  // 가장 큰 피부색 영역 찾기
  const findLargestSkinRegion = (skinMap: boolean[][], width: number, height: number): FaceRect | null => {
    const visited: boolean[][] = Array(height).fill(null).map(() => Array(width).fill(false));
    let largestRegion: FaceRect | null = null;
    let maxArea = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (skinMap[y][x] && !visited[y][x]) {
          const region = floodFill(skinMap, visited, x, y, width, height);
          if (region.area > maxArea) {
            maxArea = region.area;
            largestRegion = {
              x: region.minX,
              y: region.minY,
              width: region.maxX - region.minX,
              height: region.maxY - region.minY,
              confidence: Math.min(region.area / (width * height * 0.1), 1)
            };
          }
        }
      }
    }

    return largestRegion;
  };

  // Flood Fill 알고리즘
  const floodFill = (skinMap: boolean[][], visited: boolean[][], startX: number, startY: number, width: number, height: number) => {
    const stack: Array<[number, number]> = [[startX, startY]];
    let area = 0;
    let minX = startX, maxX = startX, minY = startY, maxY = startY;

    while (stack.length > 0) {
      const [x, y] = stack.pop()!;
      
      if (x < 0 || x >= width || y < 0 || y >= height || visited[y][x] || !skinMap[y][x]) {
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

  // 유효한 얼굴 영역인지 확인
  const isValidFaceRegion = (region: FaceRect, width: number, height: number): boolean => {
    const aspectRatio = region.width / region.height;
    const areaRatio = (region.width * region.height) / (width * height);
    
    // 얼굴 비율 체크 (너무 길거나 너무 넓지 않아야 함)
    if (aspectRatio < 0.5 || aspectRatio > 2.0) return false;
    
    // 크기 체크 (너무 작거나 너무 크지 않아야 함)
    if (areaRatio < 0.01 || areaRatio > 0.8) return false;
    
    // 최소 크기 체크
    if (region.width < 50 || region.height < 50) return false;
    
    return true;
  };

  // 얼굴 영역 확장 (여백 추가)
  const expandFaceRegion = (region: FaceRect, width: number, height: number): FaceRect => {
    const expandRatio = 0.15; // 15% 확장 (더 타이트하게)
    const expandX = region.width * expandRatio;
    const expandY = region.height * expandRatio;
    
    return {
      x: Math.max(0, region.x - expandX),
      y: Math.max(0, region.y - expandY),
      width: Math.min(width - region.x + expandX, region.width + expandX * 2),
      height: Math.min(height - region.y + expandY, region.height + expandY * 2),
      confidence: region.confidence
    };
  };

  // 중앙 영역 추정 (최후의 수단)
  const estimateCenterFaceRegion = (width: number, height: number): FaceRect => {
    const centerX = width / 2;
    const centerY = height / 2;
    const faceSize = Math.min(width, height) * 0.4; // 40%로 줄여서 더 확대
    
    return {
      x: Math.max(0, centerX - faceSize / 2),
      y: Math.max(0, centerY - faceSize / 2),
      width: Math.min(faceSize, width),
      height: Math.min(faceSize, height),
      confidence: 0.3
    };
  };

  // 얼굴 영역 크롭
  const cropFaceRegion = (ctx: CanvasRenderingContext2D, width: number, height: number, faceRect: FaceRect): string => {
    // 얼굴에 더 가깝게 크롭 (평균 크기 사용하되 더 타이트하게)
    const cropSize = Math.min(faceRect.width, faceRect.height) * 1.2; // 짧은 변 기준으로 20% 추가
    const centerX = faceRect.x + faceRect.width / 2;
    const centerY = faceRect.y + faceRect.height / 2;
    
    const cropX = Math.max(0, centerX - cropSize / 2);
    const cropY = Math.max(0, centerY - cropSize / 2);
    const actualCropSize = Math.min(
      cropSize,
      width - cropX,
      height - cropY
    );

    const croppedCanvas = document.createElement("canvas");
    const croppedCtx = croppedCanvas.getContext("2d");
    if (!croppedCtx) return "";

    croppedCanvas.width = actualCropSize;
    croppedCanvas.height = actualCropSize;

    croppedCtx.drawImage(
      ctx.canvas,
      cropX, cropY, actualCropSize, actualCropSize,
      0, 0, actualCropSize, actualCropSize
    );

    return croppedCanvas.toDataURL("image/jpeg", 0.9);
  };

  return {
    processedImageUrl,
    objectFit,
    isProcessing,
  };
};
