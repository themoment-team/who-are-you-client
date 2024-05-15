import { Theme1, Theme2 } from '../CardTheme';
import * as S from './style';
import { LeftIcon, RightIcon } from '@/assets';

const CardCarousel = () => {
  return (
    <S.CardContainer>
      <S.CarouselButton>
        <LeftIcon />
      </S.CarouselButton>
      <Theme1
        name='김재균'
        major='Front End'
        phoneNumber='010-1234-5678'
        email='s23005@gsm.hs.kr'
        mbti='ESTP'
        sns='jxx_gyun'
      />
      {/* <Theme2
        name='김재균'
        major='Front End'
        phoneNumber='010-1234-5678'
        email='s23005@gsm.hs.kr'
        mbti='ESTP'
        sns='jxx_gyun'
      /> */}
      <S.CarouselButton>
        <RightIcon />
      </S.CarouselButton>
    </S.CardContainer>
  );
};

export default CardCarousel;
