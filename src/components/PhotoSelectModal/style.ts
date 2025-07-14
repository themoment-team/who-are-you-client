import styled from '@emotion/styled';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 1.5rem 2.25rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ModalHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.black};
`;

export const CloseIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalDescription = styled.p`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.gray[60]};
`;

export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 3rem;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ImageItem = styled.div<{
  convertedImageUrl: string;
  isSelected: boolean;
  hasSelection: boolean;
}>`
  background-image: url(${({ convertedImageUrl }) => convertedImageUrl});
  background-size: cover;
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    opacity: ${({ isSelected, hasSelection }) =>
      hasSelection && !isSelected ? 1 : 0};
    transition: opacity 0.2s ease;
  }
`;

export const ConfirmButton = styled.button<{
  isSelected: boolean;
}>`
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.white : theme.color.gray[80]};
  ${({ theme }) => theme.typo.h3};
  width: 6rem;
  height: 2.75rem;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary[30] : theme.color.gray[20]};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary[30] : theme.color.gray[80]};
`;
