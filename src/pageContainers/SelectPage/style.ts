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
  justify-content: end;
  gap: 0.75rem;
  position: absolute;
  bottom: 2.5rem;
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

//로딩 스타일

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

export const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  height: 27.5rem;
  width: 27.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  `;

export const LoadingSpinner = styled.div`
  border: 0.3125rem solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.color.gray[70]};
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  animation: ${Spin} 1s linear infinite;
`;
