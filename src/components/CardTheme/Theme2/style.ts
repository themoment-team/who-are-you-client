import styled from '@emotion/styled';

export const Contianer = styled.div`
  width: 188.98px;
  height: 340.16px;
  display: flex;
  padding: 1.5425rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[30]};
  background-color: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
`;

export const ImgContinaer = styled.div`
  display: flex;
  width: 100%;
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
  width: 4.049375rem;
  height: 4.049375rem;
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
