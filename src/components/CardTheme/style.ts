import styled from '@emotion/styled';

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  height: 100%;
  justify-content: end;
`;

export const UserName = styled.h1`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
`;

export const UserMajor = styled.p`
  ${({ theme }) => theme.typo.description};
  color: ${({ theme }) => theme.color.gray[75]};
`;

export const UserInfoText = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.gray[65]};
`;

export const MainInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export const ThreeColorLine = styled.div<{ isHorizontal: boolean }>`
  width: 0.125rem;
  height: ${({ isHorizontal }) => (isHorizontal ? '1.59375rem' : '141.48px')};
  background: linear-gradient(
    180deg,
    rgba(218, 222, 0, 1) 0%,
    rgba(218, 222, 0, 1) 33.3%,
    rgba(123, 216, 247, 1) 33.4%,
    rgba(65, 214, 251, 1) 66.6%,
    rgba(83, 133, 214, 1) 66.7%,
    rgba(83, 133, 214, 1) 100%
  );
  transform: ${({ isHorizontal }) =>
    isHorizontal ? 'rotate(-90deg) translateY(50%)' : 'none'};
`;
