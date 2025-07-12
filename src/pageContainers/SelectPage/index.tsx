import {
  BusinessCardModal,
  PhotoSelectModal,
  Theme1,
  Theme2,
  Theme3,
  Theme4,
} from '@/components';
import * as S from './style';
import { useEffect, useState } from 'react';

import { LeftIcon, RightIcon } from '@/assets';
import { Flow, SelectedType, userInfoFormType } from '@/types';
import { formatPhoneNumber, getNextTheme, getPrevTheme } from '@/utils';
import { toast } from 'react-toastify';

interface Props {
  userInfo: userInfoFormType | null;
  imageUrl: string;
  selectedButton: SelectedType | null;
  convertedImageUrl: string;
  setConvertedImageUrl: React.Dispatch<React.SetStateAction<string>>;
  convertedImageUrlList: string[];
  handleConvertImage: () => Promise<void>;
  isLoading: boolean;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

const MAX_THEME = 4;

const SelectPage: React.FC<Props> = ({
  userInfo,
  imageUrl,
  selectedButton,
  convertedImageUrl,
  setConvertedImageUrl,
  convertedImageUrlList,
  handleConvertImage,
  isLoading,
  setFlow,
}) => {
  const [openPrintModal, setOpenPrintModal] = useState<'close' | 'open'>(
    'close'
  );
  const [openPhotoSelectModal, setOpenPhotoSelectModal] = useState<
    'close' | 'open'
  >('close');
  const [currentTheme, setCurrentTheme] = useState(1);
  const [reconvertCount, setReconvertCount] = useState(1);

  const nextTheme = () => {
    setCurrentTheme((prev) => getNextTheme(prev, MAX_THEME));
  };

  const prevTheme = () => {
    setCurrentTheme((prev) => getPrevTheme(prev, MAX_THEME));
  };

  const commonProps = {
    name: userInfo!.name,
    major: userInfo?.major || '',
    phoneNumber: userInfo?.phoneNumber
      ? formatPhoneNumber(userInfo.phoneNumber)
      : '',
    email: userInfo!.email,
    imageUrl:
      selectedButton === SelectedType.YES ? convertedImageUrl! : imageUrl,
    isLoading: isLoading,
  };

  const handleStepBack = () => {
    setFlow(Flow.FORM_FLOW);
  };

  const handleReconvert = async () => {
    if (selectedButton === SelectedType.YES) {
      if (reconvertCount < 3) {
        await handleConvertImage();
        setReconvertCount((prev) => prev + 1);
      } else {
        toast.warn('최대 3회까지만 재변환 가능합니다.');
      }
    }
  };
  useEffect(() => {
    if (selectedButton === SelectedType.YES)
      if (isLoading) toast.info('AI로 이미지 변환중입니다.');
      else toast.success('AI 변환이 완료되었습니다.');
  }, [isLoading]);
  return (
    <>
      {openPrintModal === 'open' && (
        <BusinessCardModal
          closeModal={() => setOpenPrintModal('close')}
          currentTheme={currentTheme}
          userInfo={userInfo}
          imageUrl={
            selectedButton === SelectedType.YES ? convertedImageUrl! : imageUrl
          }
        />
      )}
      {openPhotoSelectModal === 'open' && (
        <PhotoSelectModal
          setOpenPhotoSelectModal={setOpenPhotoSelectModal}
          setConvertedImageUrl={setConvertedImageUrl}
          convertedImageUrlList={convertedImageUrlList}
        />
      )}
      <S.Container>
        <S.TopBox>
          <S.Description>
            인쇄하실 명함의 테마를 <br /> 선택해주세요!
          </S.Description>
          {selectedButton === SelectedType.YES &&
            convertedImageUrlList.length > 1 && (
              <S.PhotoSelectButton
                onClick={() => setOpenPhotoSelectModal('open')}
              >
                다른 이미지 선택
              </S.PhotoSelectButton>
            )}
        </S.TopBox>
        <S.CardContainer>
          <S.CarouselLeftButton onClick={prevTheme}>
            <LeftIcon />
          </S.CarouselLeftButton>
          {currentTheme === 1 && <Theme1 {...commonProps} />}
          {currentTheme === 2 && <Theme2 {...commonProps} />}
          {currentTheme === 3 && <Theme3 {...commonProps} />}
          {currentTheme === 4 && <Theme4 {...commonProps} />}
          <S.CarouselRightButton onClick={nextTheme}>
            <RightIcon />
          </S.CarouselRightButton>
        </S.CardContainer>
        <S.ButtonBox>
          <S.BackButton onClick={handleStepBack}>
            <S.BackText>이전으로</S.BackText>
          </S.BackButton>
          {isLoading && selectedButton === SelectedType.YES ? (
            <S.BlockButton disabled={true}>명함인쇄</S.BlockButton>
          ) : (
            <S.ReconvertAndPrintBox>
              <S.AIReconvertButton onClick={handleReconvert}>
                {`재변환 (${reconvertCount}/3)`}
              </S.AIReconvertButton>
              <S.ShotButton onClick={() => setOpenPrintModal('open')}>
                명함인쇄
              </S.ShotButton>
            </S.ReconvertAndPrintBox>
          )}
        </S.ButtonBox>
      </S.Container>
    </>
  );
};

export default SelectPage;
