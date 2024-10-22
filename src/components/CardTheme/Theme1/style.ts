import styled from '@emotion/styled';

export const Contianer = styled.div`
  width: fit-content;
  height: 11.3125rem;
  padding: 1.8rem 1.4rem 1.4rem 2rem;
  gap: 0.0625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[30]};
  background-color: ${({ theme }) => theme.color.white};
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
`;

export const ImgContinaer = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.29rem;
  object-fit: cover;
`;

export const MainInfoContianer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 25rem;
  height: 100%;
`;

export const MarginBox = styled.div`
  margin-top: 2.6125rem;
  height: 100%;
`;

export const LogoImage = styled.img`
  width: 4.935rem;
  height: 2.97rem;
`;

export const LineImage = styled.img`
  width: 2.2rem;
  margin-top: 0.4rem;
`;
