import { BusinessCardModal } from '@/components';
import * as S from './style';
import { useState } from 'react';

import { Theme1, Theme2, Theme3 } from '@/components';
import { LeftIcon, RightIcon } from '@/assets';
import { SelectedType, userInfoFormType } from '@/types';

interface Props {
  userInfo: userInfoFormType | null;
  imageUrl: string;
  selectedButton: SelectedType | null;
  convertedImageUrl: string | null;
}

const SelectPage: React.FC<Props> = ({
  userInfo,
  imageUrl,
  selectedButton,
  convertedImageUrl,
}) => {
  const [openModalCase, setOpenModalCase] = useState<'close' | 'open'>('close');
  const [currentTheme, setCurrentTheme] = useState(1);

  const nextTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme % 3) + 1);
  };

  const prevTheme = () => {
    setCurrentTheme((prevTheme) => ((prevTheme - 2 + 3) % 3) + 1);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  const isValidMBTI = (mbti: string | undefined) => {
    return !!mbti && /^[A-Za-z]{4}$/.test(mbti);
  };

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
          {currentTheme === 1 && (
            <Theme1
              name={userInfo.name}
              major={userInfo.major}
              phoneNumber={formatPhoneNumber(userInfo.phoneNumber)}
              email={userInfo.email}
              mbti={isValidMBTI(userInfo?.mbti) ? userInfo.mbti : undefined}
              sns='jxx_gyun'
              imageUrl={
                selectedButton === SelectedType.YES
                  ? convertedImageUrl!
                  : imageUrl
              }
            />
          )}
          {currentTheme === 2 && (
            <Theme2
              name={userInfo.name}
              major={userInfo.major}
              phoneNumber={formatPhoneNumber(userInfo.phoneNumber)}
              email={userInfo.email}
              mbti={isValidMBTI(userInfo?.mbti) ? userInfo.mbti : undefined}
              sns='jxx_gyun'
              imageUrl={
                selectedButton === SelectedType.YES
                  ? convertedImageUrl!
                  : imageUrl
              }
            />
          )}
          {currentTheme === 3 && (
            <Theme3
              name={userInfo.name}
              phoneNumber={formatPhoneNumber(userInfo.phoneNumber)}
              email={userInfo.email}
              mbti={isValidMBTI(userInfo?.mbti) ? userInfo.mbti : undefined}
              sns='jxx_gyun'
              imageUrl={
                selectedButton === SelectedType.YES
                  ? convertedImageUrl!
                  : imageUrl
              }
            />
          )}
          <S.CarouselRightButton onClick={nextTheme}>
            <RightIcon />
          </S.CarouselRightButton>
        </S.CardContainer>
        <S.ButtonBox onClick={() => setOpenModalCase('open')}>
          <S.ShotButton>명함인쇄</S.ShotButton>
        </S.ButtonBox>
      </S.Container>
    </>
  );
};

export default SelectPage;
