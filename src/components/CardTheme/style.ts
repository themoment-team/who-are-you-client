import styled from '@emotion/styled';

export const MainInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 1;
`;

export const UserName = styled.h1`
  margin: 4px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
`;

export const UserMajor = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray[60]};
  margin: 1px 0;
`;

export const SubInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SubInfoText = styled.p`
  font-size: 8.5px;
  font-weight: 400;
  color: #494949;
  margin: 0.75px 0;
`;
