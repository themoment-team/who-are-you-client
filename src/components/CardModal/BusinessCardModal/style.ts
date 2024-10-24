import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  border-radius: 0.5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const FinishMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const FinishMessage = styled.h1`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
`;

export const PrintMessage = styled.p`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.gray[60]};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ShotButton = styled.button`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary[30]};
  font-weight: 500;
  border-radius: 0.5rem;
  width: 6rem;
  height: 3rem;
`;

export const ImgBox = styled.div<{ themeType: number }>`
  width: 100%;
  display: flex;
  justify-content: ${({ themeType }) =>
    themeType === 2 ? 'center' : 'space-between'};
  flex-wrap: wrap;
  align-items: ${({ themeType }) =>
    themeType === 2 ? 'center' : 'flex-start'}; // 추가: 세로 정렬
`;
