import styled from '@emotion/styled';

export const Contianer = styled.div`
  width: fit-content;
  display: flex;
  padding: 1.9rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 23.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[30]};
  background-color: ${({ theme }) => theme.color.white};
`;

export const ImgContinaer = styled.div`
  display: flex;
  width: 11.3125rem;
  justify-content: flex-start;
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
  gap: 2.5rem;
`;

export const ImgBox = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 0.29rem;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: flex-end;
`;

export const LogoImage = styled.img`
  width: 4.5rem;
  height: 2.0625rem;
`;

export const LineImage = styled.img`
  width: 2.2rem;
  margin-top: 0.4rem;
`;
