import styled from '@emotion/styled';

export const Continer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const ModalBox = styled.div`
  width: 560px;
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  margin: 32px 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Close = styled.div`
  cursor: pointer;
`;

export const ModalTitle = styled.p`
  ${({ theme }) => `
    font-size: ${theme.typo.h2.fontSize};
    line-height: ${theme.typo.h2.lineHeight};
    font-weight: ${theme.typo.h2.fontWeight};
  `}
  line-height: 28px;
`;

export const ModalExplanate = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.color.gray[60]};
  margin-top: 6px;
`;

export const PreviewBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
`;

export const ImageText = styled.p<{ isHovered: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  border: 1px solid
    ${({ isHovered, theme }) => (isHovered ? theme.color.primary[30] : 'white')};
  border-radius: 4px;
`;

export const ImageBox = styled.div`
  width: 160px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  border-radius: 8px;
  margin-top: 6px;
`;
