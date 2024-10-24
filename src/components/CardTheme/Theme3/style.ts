import styled from '@emotion/styled';

export const Container = styled.div`
  width: 340.16px;
  height: 188.98px;
  padding: 1.54625rem 1.44938rem;
  gap: 0.0625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[30]};
  background-color: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
`;

export const ImgHeightBox = styled.div`
  height: 100%;
`;

export const ImgContainer = styled.img`
  width: 4.63875rem;
  height: 4.63875rem;
  border-radius: 0.29rem;
  object-fit: cover;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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
  width: 3.28625rem;
  height: 1.98125rem;
`;

export const MarginBox = styled.div`
  margin-top: auto;
  height: auto;
  overflow-y: auto;
  max-height: 4rem;
`;
