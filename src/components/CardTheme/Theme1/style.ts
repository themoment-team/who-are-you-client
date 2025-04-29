import styled from '@emotion/styled';

export const Container = styled.div`
  width: 340.16px;
  height: 188.98px;
  padding: 31px 28px 28px;
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
