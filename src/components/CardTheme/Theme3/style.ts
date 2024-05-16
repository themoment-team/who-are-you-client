import styled from '@emotion/styled';

export const Contianer = styled.div`
  width: fit-content;
  display: flex;
  padding: 2rem 2rem 1.875rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.0625rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray[40]};
  background-color: ${({ theme }) => theme.color.white};
`;

export const ImgHeightBox = styled.div`
  height: 11.3125rem;
  display: flex;
  align-items: flex-end;
`;

export const ImgContinaer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 0.75rem;
`;

export const MainInfoContianer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7.5625rem;
  justify-content: center;
`;

export const PurpleBar = styled.div`
  width: 0.125rem;
  height: 7.25rem;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.color.primary[30]};
`;

export const PuppleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
