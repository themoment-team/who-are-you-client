import styled from '@emotion/styled';

export const Contianer = styled.div`
  width: fit-content;
  min-height: 11.3125rem;
  display: flex;
  padding: 2rem 2rem 1.875rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.0625rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[40]};
  background-color: ${({ theme }) => theme.color.white};
`;

export const ImageWrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap: 6px;
align-items: flex-end;
`

export const ImgContinaer = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const MainInfoContianer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8.5625rem;
`;

export const MarginBox = styled.div`
  margin-top: 2.6125rem;
`;

export const LogoImage = styled.img`
  width: 4.5rem;
  height: 2.0625rem;

`