import { CardCarousel } from '@/components';
import * as S from './style';

const SelectPage = () => {
  return (
    <S.Container>
      <S.Description>
        인쇄하실 명함의 테마를 <br /> 선택해주세요!
      </S.Description>
      <CardCarousel />
      <S.ButtonBox>
        <S.ShotButton>명함인쇄</S.ShotButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default SelectPage;
