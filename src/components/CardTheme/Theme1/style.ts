import styled from '@emotion/styled';

export const Container = styled.div`
  width: 340.16px;
  height: 188.98px;
  gap: 0.0625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[30]};
  background-color: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
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
  overflow: hidden;
  padding: 1.54625rem 1.4rem 1.54625rem 1.52875rem;
  box-sizing: border-box;
`;

export const MarginBox = styled.div`
  margin-top: auto;
  height: auto;
  overflow-y: auto;
  max-height: 4rem;
`;

export const LogoImage = styled.img`
  width: 3.28625rem;
  height: 1.98125rem;
`;

export const LineImage = styled.img`
  width: 2.2rem;
  margin-top: 0.4rem;
`;

export const UserInfoText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
