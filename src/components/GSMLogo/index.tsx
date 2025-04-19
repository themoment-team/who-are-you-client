import { GSMLogoProps } from '@/types';
import * as S from './style';

const GSMLogo = ({ top, left }: GSMLogoProps) => {
  return <S.StyledImg src='/images/GSMLogo.png' top={top} left={left} />;
};

export default GSMLogo;
