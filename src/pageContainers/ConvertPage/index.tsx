import { Flow, SelectedType } from '@/types';
import * as S from './style';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { PromptSelector, YesOrNoButton } from '@/components';
import { PromptType } from '@/types/promptType';

interface Props {
  imageUrl: string;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
  selectedButton: SelectedType | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<SelectedType | null>>;
  convertedImageUrl: string;
  selectedPrompt: keyof PromptType;
  setSelectedPrompt: React.Dispatch<React.SetStateAction<keyof PromptType>>;
  handleConvertImage: () => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConvertPage: React.FC<Props> = ({
  imageUrl,
  setFlow,
  selectedButton,
  setSelectedButton,
  convertedImageUrl,
  selectedPrompt,
  setSelectedPrompt,
  handleConvertImage,
  isLoading,
  setIsLoading,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleNextButtonClick = () => {
    if (selectedButton === null) {
      return toast.error('예, 아니오 중 하나를 선택해 주셔야해요.');
    }

    if (selectedButton === SelectedType.NO) {
      setFlow(Flow.FORM_FLOW);
      return;
    }

    if (selectedButton === SelectedType.YES) {
      if (!convertedImageUrl) {
        convertImage();
        return;
      }
      setFlow(Flow.SELECT_THEME_FLOW);
    }
  };

  const handleModalButtonClick = () => setIsModal(false);

  const handlePreviewButtonClick = () => {
    if (selectedButton !== null) {
      setIsModal(true);
    } else {
      toast.error('예, 아니요 중 하나를 선택해 주셔야해요.');
    }
  };

  const convertImage = async () => {
    handleConvertImage();
    setFlow(Flow.FORM_FLOW);
    return;
  };

  const handleBackButtonClick = () => setFlow(Flow.PHOTO_FLOW);

  const handlePromptClick = (promptText: keyof PromptType) => {
    setSelectedPrompt(promptText);
  };

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
          {selectedButton === SelectedType.NO ||
          selectedButton === SelectedType.YES ? (
            <S.PreviewButton onClick={handlePreviewButtonClick}>
              사진확대
            </S.PreviewButton>
          ) : null}
          <S.NextButton
            onClick={handleNextButtonClick}
            disabled={selectedButton === SelectedType.YES && isLoading}
          >
            다음으로
          </S.NextButton>
        </S.ButtonWrapper>
      </S.ButtonBox>
      {isModal && (
        <S.PreviewModal>
          <S.ModalBox>
            <S.ImgWrapper>
              <S.ModalImg src={imageUrl} />
            </S.ImgWrapper>
            <S.ModalButton onClick={handleModalButtonClick}>확인</S.ModalButton>
          </S.ModalBox>
        </S.PreviewModal>
      )}
    </S.Container>
  );
};

export default ConvertPage;
