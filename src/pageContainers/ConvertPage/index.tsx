import { ConvertedImageType, Flow, SelectedType } from '@/types';
import * as S from './style';
import YesOrNoButton from '@/components/YesOrNoButton';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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

    setConvertedImageUrl(response.images[0].image);
    setIsLoading(false);
  };

  const handleBackButtonClick = () => setFlow(Flow.PHOTO_FLOW);

  const postConvertedImage = async (): Promise<ConvertedImageType> => {
    try {
      const sliceUrl = imageUrl.slice(22);

      const body = {
        width: 1024,
        height: 1024,
        version: 'v2.1',
        image_format: 'png',
        image: sliceUrl,
      };

      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify(body),
      });

      const json = await response.json();

      return json;
    } catch {
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
