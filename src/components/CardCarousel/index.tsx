import { useState } from 'react';
import { Theme1, Theme2, Theme3 } from '@/components';
import * as S from './style';
import { LeftIcon, RightIcon } from '@/assets';

const CardCarousel = () => {
  const [currentTheme, setCurrentTheme] = useState(1);

  const nextTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme % 3) + 1);
  };

  const prevTheme = () => {
    setCurrentTheme((prevTheme) => ((prevTheme - 2 + 3) % 3) + 1);
  };
  return (
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
  );
};

export default CardCarousel;
