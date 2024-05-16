import { BusinessCardModal } from '@/components';
import * as S from './style';
import { useState } from 'react';

import { Theme1, Theme2, Theme3 } from '@/components';
import { LeftIcon, RightIcon } from '@/assets';

const SelectPage = () => {
  const [openModalCase, setOpenModalCase] = useState<'close' | 'open'>('close');
  const [currentTheme, setCurrentTheme] = useState(1);

  const nextTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme % 3) + 1);
  };

  const prevTheme = () => {
    setCurrentTheme((prevTheme) => ((prevTheme - 2 + 3) % 3) + 1);
  };

  return (
    <>
      {openModalCase === 'open' && (
        <BusinessCardModal
          closeModal={() => setOpenModalCase('close')}
          currentTheme={currentTheme}
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
              name='김재균'
              major='Front End'
              phoneNumber='010-1234-5678'
              email='s23005@gsm.hs.kr'
              mbti='ESTP'
              sns='jxx_gyun'
            />
          )}
          {currentTheme === 2 && (
            <Theme2
              name='김재균'
              major='Front End'
              phoneNumber='010-1234-5678'
              email='s23005@gsm.hs.kr'
              mbti='ESTP'
              sns='jxx_gyun'
            />
          )}
          {currentTheme === 3 && (
            <Theme3
              name='김재균'
              phoneNumber='010-1234-5678'
              email='s23005@gsm.hs.kr'
              mbti='ESTP'
              sns='jxx_gyun'
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
