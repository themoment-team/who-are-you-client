import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 2.25rem 0;
  width: 32.75rem;
`;

export const Image = styled.img`
  height: 6.9375rem;
  border-radius: 0.5rem;
`;

export const Description = styled.h1`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
`;

export const ButtonBox = styled.div`
  width: 32.75rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 2.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const NextButton = styled.button`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary[30]};
  font-weight: 500;
  border-radius: 0.5rem;
  width: 7.875rem;
  height: 3rem;

  &:disabled {
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => `0.0625rem solid ${theme.color.gray[40]}`};
    color: ${({ theme }) => theme.color.gray[70]};
    cursor: not-allowed;
  }
`;

export const PreviewButton = styled(NextButton)`
  color: ${({ theme }) => theme.color.primary[30]};
  border: 0.0625rem solid ${({ theme }) => theme.color.primary[30]};
  background-color: ${({ theme }) => theme.color.white};
`;

export const BackButton = styled(NextButton)`
  color: ${({ theme }) => theme.color.primary[40]};
  background-color: ${({ theme }) => theme.color.primary[10]};
`;

export const PreviewModal = styled.div`
  height: calc(100vh - 5rem);
  width: 38.75rem;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: end;
`;

export const ModalImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const ModalButton = styled(NextButton)`
  color: ${({ theme }) => theme.color.primary[40]};
  background-color: ${({ theme }) => theme.color.primary[10]};
  margin-right: 0.99rem;
`;

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  `;

export const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  height: 27.5rem;
  width: 27.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingSpinner = styled.div`
  border: 0.3125rem solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.color.gray[70]};
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  animation: ${Spin} 1s linear infinite;
`;
