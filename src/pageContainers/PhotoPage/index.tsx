import { useCallback, useRef } from 'react';
import * as S from './style';
import Webcam from 'react-webcam';
import { CameraGuide } from '@/assets';
import { Flow } from '@/types';

interface Props {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

const PhotoPage: React.FC<Props> = ({ setImageUrl, setFlow }) => {
  const webcamRef = useRef<Webcam>(null);

  const handleShotButtonClick = useCallback(() => {
    if (webcamRef.current) {
      const imageUrl = webcamRef.current.getScreenshot();
      setImageUrl(imageUrl!);
      setFlow(Flow.CONVERT_PHOTO_FLOW);
    }
  }, [webcamRef]);

  return (
    <S.Container>
      <S.Description>
        먼저, 화면 중앙의 가이드에
        <br />
        얼굴을 맞춰 사진을 촬영해주세요!
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
