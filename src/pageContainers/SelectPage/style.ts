import styled from '@emotion/styled';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Description = styled.h1`
  ${({ theme }) => theme.typo.title};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
  margin: 2.5rem 0 2.25rem 0;
  width: 32.7rem;
`;

export const CarouselButton = styled.button``;

export const ButtonBox = styled.div`
  width: 32.75rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 2.5rem;
`;

export const ReconvertAndPrintBox = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ShotButton = styled.button`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary[30]};
  font-weight: 500;
  border-radius: 0.5rem;
  width: 7.875rem;
  height: 3rem;
`;

export const AIReconvertButton = styled.button`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary[20]};
  font-weight: 500;
  border-radius: 0.5rem;
  width: 7.875rem;
  height: 3rem;
`;

export const BlockButton = styled.button`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.gray[40]};
  background-color: ${({ theme }) => theme.color.gray[10]};
  border: 1px solid ${({ theme }) => theme.color.gray[40]};
  font-weight: 500;
  border-radius: 0.5rem;
  width: 7.875rem;
  height: 3rem;
  cursor: not-allowed;
`;

export const BackButton = styled.button`
  display: flex;
  width: 7.875rem;
  height: 3rem;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary[30]};
`;

export const BackText = styled.h3`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.primary[30]};
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 6.125rem 2.5rem;
  align-items: center;
  gap: 1.625rem;
  height: 20.625rem;
`;

export const CarouselLeftButton = styled.button`
  position: absolute;
  left: 3rem;
`;

export const CarouselRightButton = styled.button`
  position: absolute;
  right: 3rem;
`;
