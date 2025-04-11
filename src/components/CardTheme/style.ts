import styled from '@emotion/styled';

export const MainInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
  z-index: 1;
`;

export const UserName = styled.h1`
  margin: 0.25rem 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
`;

export const UserMajor = styled.p`
  ${({ theme }) => theme.typo.description};
  color: ${({ theme }) => theme.color.gray[60]};
  margin: 0.0625rem 0;
`;

export const SubInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;

export const SubInfoText = styled.p`
  font-size: 0.5313rem;
  font-weight: 400;
  color: #494949;
  margin: 0.0469rem 0;
`;
