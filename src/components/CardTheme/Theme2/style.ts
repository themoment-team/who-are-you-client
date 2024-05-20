import styled from '@emotion/styled';

export const Contianer = styled.div`
  width: fit-content;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 8.75rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[40]};
  background-color: ${({ theme }) => theme.color.white};
`;

export const ImgContinaer = styled.div`
  display: flex;
  width: 11.3125rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

export const MainInfoContianer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const UserContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ImgBox = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;
