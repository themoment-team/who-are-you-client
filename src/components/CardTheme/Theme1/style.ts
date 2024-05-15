import styled from '@emotion/styled';

export const Contianer = styled.div`
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

export const ImgContinaer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 0.75rem;
`;

export const MainInfoContianer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10.5625rem;
`;
