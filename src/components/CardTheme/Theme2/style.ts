import styled from '@emotion/styled';

export const Container = styled.div`
  width: 328px;
  height: 189px;
  padding: 31px 28px 28px 38px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.gray[30]};
  background-color: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
  position: relative;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserImage = styled.div<{ imageUrl: string }>`
  width: 130px;
  height: 130px;
  border-radius: 8px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const DummyImageWrapper = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.gray[30]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
