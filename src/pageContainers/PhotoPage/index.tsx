import { useCallback, useRef } from 'react';
import * as S from './style';
import Webcam from 'react-webcam';
import { CameraGuide } from '@/assets';
import { Flow } from '@/types';

interface Props {
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

const PhotoPage: React.FC<Props> = ({ setImage, setFlow }) => {
  const webcamRef = useRef<Webcam>(null);

  const handleShotButtonClick = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const imageFile = dataURLtoFile(imageSrc!, 'userImg');
      setImage(imageFile);
      setFlow(Flow.CONVERT_AI_PHOTO_FLOW);
    }
  }, [webcamRef]);

  const dataURLtoFile = (dataUrl: string, filename: string) => {
    const splitedUrl = dataUrl.split(',');
    const mime = splitedUrl?.[0].match(/:(.*?);/)?.[1];
    const byteString = atob(splitedUrl[1]);
    let n = byteString.length;
    const uint8Array = new Uint8Array(n);
    while (n--) {
      uint8Array[n] = byteString.charCodeAt(n);
    }
    return new File([uint8Array], filename, { type: mime });
  };

  return (
    <S.Container>
      <S.Description>
        화면 중앙의 가이드에 얼굴을 맞춰
        <br />
        사진을 촬영해주세요!
      </S.Description>
      <S.WebcamWrapper>
        <CameraGuide />
        <Webcam
          mirrored={true}
          ref={webcamRef}
          audio={false}
          screenshotFormat='image/png'
        />
      </S.WebcamWrapper>
      <S.ButtonBox>
        <S.ShotButton onClick={handleShotButtonClick}>사진촬영</S.ShotButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default PhotoPage;
