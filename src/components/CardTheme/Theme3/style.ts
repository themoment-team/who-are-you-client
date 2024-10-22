import styled from '@emotion/styled';

export const Contianer = styled.div`
  width: fit-content;
  height: 11.3125rem;
  padding: 1.8rem 1.8rem 1.4rem 2rem;
  gap: 0.0625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[40]};
  background-color: ${({ theme }) => theme.color.white};
`;

export const ImgHeightBox = styled.div`
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

export const Bar = styled.div`
  width: 0.125rem;
  flex-shrink: 0;
  /* background-color: ${({ theme }) => theme.color.primary[30]}; */
  background: linear-gradient(
    180deg,
    rgba(218, 222, 0, 1) 0%,
    rgba(218, 222, 0, 1) 33.3%,
    rgba(123, 216, 247, 1) 33.4%,
    rgba(65, 214, 251, 1) 66.6%,
    rgba(83, 133, 214, 1) 66.7%,
    rgba(83, 133, 214, 1) 100%
  );
`;

export const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
`;

export const LogoImage = styled.img`
  width: 4.935rem;
  height: 2.97rem;
`;

export const MarginBox = styled.div`
  margin-top: 2.6125rem;
  height: 100%;
`;
