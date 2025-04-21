import styled from '@emotion/styled';

export const Container = styled.div`
  width: 188.98px;
  height: 340.16px;
  padding: 24px 27px 28px;
  display: flex;
  gap: 36px;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray[30]};
  background-color: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
  position: relative;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserImage = styled.div<{ imageUrl: string }>`
  width: 135px;
  height: 135px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  border-radius: 50%;
`;
