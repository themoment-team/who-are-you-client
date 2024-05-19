import { BusinessCardModal } from '@/components';
import * as S from './style';
import { useState } from 'react';

import { Theme1, Theme2, Theme3 } from '@/components';
import { LeftIcon, RightIcon } from '@/assets';
import { SelectedType, userInfoFormType } from '@/types';
import { formatPhoneNumber, isValidMBTI } from '@/utils';

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
    setCurrentTheme((prevTheme) => ((prevTheme + 1) % 3) + 1);
  };

  const commonProps = {
    name: userInfo.name,
    major: userInfo.major,
    phoneNumber: formatPhoneNumber(userInfo.phoneNumber),
    email: userInfo.email,
    mbti: isValidMBTI(userInfo?.mbti) ? userInfo.mbti : undefined,
    sns: 'jxx_gyun',
    imageUrl:
      selectedButton === SelectedType.YES ? convertedImageUrl! : imageUrl,
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
          {currentTheme === 1 && <Theme1 {...commonProps} />}
          {currentTheme === 2 && <Theme2 {...commonProps} />}
          {currentTheme === 3 && <Theme3 {...commonProps} />}
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
