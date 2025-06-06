import {
  BusinessCardModal,
  Theme1,
  Theme2,
  Theme3,
  Theme4,
} from '@/components';
import * as S from './style';
import { useEffect, useState } from 'react';

import { LeftIcon, RightIcon } from '@/assets';
import { SelectedType, userInfoFormType } from '@/types';
import { formatPhoneNumber, getNextTheme, getPrevTheme } from '@/utils';
import { toast } from 'react-toastify';

interface Props {
  userInfo: userInfoFormType | null;
  imageUrl: string;
  selectedButton: SelectedType | null;
  convertedImageUrl: string;
  isLoading: boolean;
}

const MAX_THEME = 4;

const SelectPage: React.FC<Props> = ({
  userInfo,
  imageUrl,
  selectedButton,
  convertedImageUrl,
  isLoading,
}) => {
  const [openModalCase, setOpenModalCase] = useState<'close' | 'open'>('close');
  const [currentTheme, setCurrentTheme] = useState(1);

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

  useEffect(() => {
    if (selectedButton === SelectedType.YES)
      if (isLoading) toast.info('AI로 이미지 변환중입니다');
      else toast.success('AI 변환이 완료되었습니다');
  }, [isLoading]);
  return (
    <>
      {openModalCase === 'open' && (
        <BusinessCardModal
          closeModal={() => setOpenModalCase('close')}
          currentTheme={currentTheme}
          userInfo={userInfo}
          imageUrl={
            selectedButton === SelectedType.YES ? convertedImageUrl! : imageUrl
          }
        />
      )}
      <S.Container>
        <S.Description>
          인쇄하실 명함의 테마를 <br /> 선택해주세요!
        </S.Description>
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
        <S.ButtonBox onClick={() => setOpenModalCase('open')}>
          {isLoading && selectedButton === SelectedType.YES ? (
            <S.BlockButton disabled={true}>명함인쇄</S.BlockButton>
          ) : (
            <S.ShotButton>명함인쇄</S.ShotButton>
          )}
        </S.ButtonBox>
      </S.Container>
    </>
  );
};

export default SelectPage;
