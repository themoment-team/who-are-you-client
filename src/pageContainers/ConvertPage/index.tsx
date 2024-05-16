import { ConvertedImageType, Flow, SelectedType } from '@/types';
import * as S from './style';
import YesOrNoButton from '@/components/YesOrNoButton';
import { useState } from 'react';

interface Props {
  imageUrl: string;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
  selectedButton: SelectedType | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<SelectedType | null>>;
  convertedImageUrl: string | null;
  setConvertedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
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

  const handleNextButtonClick = () => setFlow(Flow.CHOOSE_DESIGN_FLOW);
  const handleModalButtonClick = () => setIsModal(false);
  const handlePreviewButtonClick = async () => {
    if (!selectedButton) return; // 추후 toast 넣을 예정

    if (!convertedImageUrl && selectedButton === SelectedType.YES) {
      const response = await getConvertedImage();

      setConvertedImageUrl(response.images[0].image);
    }

    setIsModal(true);
  };

  const getConvertedImage = async (): Promise<ConvertedImageType> => {
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
        <S.PreviewButton onClick={handlePreviewButtonClick}>
          미리보기
        </S.PreviewButton>
        <S.NextButton onClick={handleNextButtonClick}>다음으로</S.NextButton>
      </S.ButtonBox>
      {isModal && (
        <S.PreviewModal>
          <S.ModalBox>
            <S.ModalImg
              src={
                selectedButton! === SelectedType.YES
                  ? convertedImageUrl!
                  : selectedButton! === SelectedType.NO
                    ? imageUrl
                    : ''
              }
            />
            <S.ModalButton onClick={handleModalButtonClick}>확인</S.ModalButton>
          </S.ModalBox>
        </S.PreviewModal>
      )}
    </S.Container>
  );
};

export default ConvertPage;
