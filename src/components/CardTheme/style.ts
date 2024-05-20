import styled from '@emotion/styled';

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`;

export const UserName = styled.h1`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
`;

export const UserMajor = styled.p`
  ${({ theme }) => theme.typo.description};
  color: ${({ theme }) => theme.color.primary[30]};
`;

export const UserInfoText = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.gray[70]};
`;

export const MainInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
