import { GSMLogoProps } from '@/types';
import styled from '@emotion/styled';

export const StyledImg = styled.img<GSMLogoProps>`
  width: 120px;
  height: 54px;
  position: absolute;
  top: ${({ top }) => top || '0'};
  left: ${({ left }) => left || '0'};
`;
