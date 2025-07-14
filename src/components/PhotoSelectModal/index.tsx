import { CloseIcon } from '@/assets';
import * as S from './style';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  setOpenPhotoSelectModal: React.Dispatch<
    React.SetStateAction<'close' | 'open'>
  >;
  setConvertedImageUrl: React.Dispatch<React.SetStateAction<string>>;
  convertedImageUrlList: string[];
}

const PhotoSelectModal = ({
  setOpenPhotoSelectModal,
  setConvertedImageUrl,
  convertedImageUrlList,
}: Props) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
  };

  const handleConfirm = () => {
    if (selectedImageUrl) {
      setConvertedImageUrl(selectedImageUrl);
      setOpenPhotoSelectModal('close');
    } else {
      toast.warn('이미지를 선택해주세요.');
    }
  };

  return (
    <S.Background onClick={() => setOpenPhotoSelectModal('close')}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalHeaderTop>
            <S.ModalTitle>다른 이미지 선택 🖼️</S.ModalTitle>
            <S.CloseIcon onClick={() => setOpenPhotoSelectModal('close')}>
              <CloseIcon />
            </S.CloseIcon>
          </S.ModalHeaderTop>
          <S.ModalDescription>
            AI가 만든 이미지 중 하나를 선택해 명함에 적용해보세요!
          </S.ModalDescription>
        </S.ModalHeader>
        <S.ModalMain>
          <S.ImageBox>
            {convertedImageUrlList.map((convertedImageUrl, index) => {
              const isSelected = selectedImageUrl === convertedImageUrl;
              const hasSelection = selectedImageUrl !== '';
              return (
                <S.ImageItem
                  key={index}
                  convertedImageUrl={convertedImageUrl}
                  isSelected={isSelected}
                  hasSelection={hasSelection}
                  onClick={() => handleImageSelect(convertedImageUrl)}
                />
              );
            })}
          </S.ImageBox>
          <S.ConfirmButton
            isSelected={!!selectedImageUrl}
            onClick={handleConfirm}
          >
            확인
          </S.ConfirmButton>
        </S.ModalMain>
      </S.Modal>
    </S.Background>
  );
};

export default PhotoSelectModal;
