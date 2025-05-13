import { Flow, SelectedType } from '@/types';
import * as S from './style';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PromptSelector, YesOrNoButton } from '@/components';

interface Props {
  imageUrl: string;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
  selectedButton: SelectedType | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<SelectedType | null>>;
  convertedImageUrl: string;
  setConvertedImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ConvertPage: React.FC<Props> = ({
  imageUrl,
  setFlow,
  selectedButton,
  setSelectedButton,
  convertedImageUrl,
  setConvertedImageUrl,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string>('지브리');

  const handleNextButtonClick = () => {
    if (selectedButton === null)
      return toast.error('예, 아니오 중 하나를 선택해 주셔야해요.');

    if (
      (selectedButton === SelectedType.YES && !isLoading) ||
      selectedButton === SelectedType.NO
    )
      setFlow(Flow.SELECT_THEME_FLOW);
    else {
      return toast.error('아직 변환된 사진이 로딩되지 않았습니다');
    }
  };

  const handleModalButtonClick = () => setIsModal(false);
  const handlePreviewButtonClick = () =>
    selectedButton !== null
      ? setIsModal(true)
      : toast.error('예, 아니요 중 하나를 선택해 주셔야해요.');

  const convertImage = async () => {
    setIsLoading(true);
    const response = await postConvertedImage();

    setConvertedImageUrl(response);
    setIsLoading(false);
  };

  const handleBackButtonClick = () => setFlow(Flow.PHOTO_FLOW);

  const handlePromptClick = (promptText: string) => {
    setSelectedPrompt(promptText);
  };

  const postConvertedImage = async () => {
    try {
      const sliceUrl = imageUrl.slice(22);

      const body = {
        prompt: 'clear background, naturally, reality',
        image: sliceUrl,
        steps: 20,
        seed: 46588,
        denoise: 0.75,
        scheduler: 'simple',
        sampler_name: 'euler',
        base64: false,
      };

      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify(body),
      });

      const blobImageUrl = URL.createObjectURL(await response.blob());

      return blobImageUrl;
    } catch (error) {
      toast.error('이미지 변환 중 오류가 발생했습니다. 다시 시도해 주세요.');
      throw new Error('Error');
    }
  };

  useEffect(() => {
    convertImage();
  }, []);

  return (
    <S.Container>
      <S.TopBox>
        <S.Description>
          촬영하신 사진을
          <br />
          AI로 변환하시겠습니까?
        </S.Description>
        <S.Image src={imageUrl} />
      </S.TopBox>
      <YesOrNoButton
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {selectedButton === SelectedType.YES && (
        <PromptSelector
          selectedPrompt={selectedPrompt}
          handlePromptClick={handlePromptClick}
        />
      )}
      <S.ButtonBox>
        <S.BackButton onClick={handleBackButtonClick}>다시찍기</S.BackButton>
        <S.ButtonWrapper>
          <S.PreviewButton onClick={handlePreviewButtonClick}>
            미리보기
          </S.PreviewButton>
          <S.NextButton onClick={handleNextButtonClick}>다음으로</S.NextButton>
        </S.ButtonWrapper>
      </S.ButtonBox>
      {isModal && (
        <S.PreviewModal>
          <S.ModalBox>
            <S.ImgWrapper>
              {isLoading && selectedButton === SelectedType.YES ? (
                <S.LoadingSpinner />
              ) : (
                <S.ModalImg
                  src={
                    selectedButton === SelectedType.YES
                      ? convertedImageUrl!
                      : imageUrl
                  }
                />
              )}
            </S.ImgWrapper>
            <S.ModalButton onClick={handleModalButtonClick}>확인</S.ModalButton>
          </S.ModalBox>
        </S.PreviewModal>
      )}
    </S.Container>
  );
};

export default ConvertPage;
