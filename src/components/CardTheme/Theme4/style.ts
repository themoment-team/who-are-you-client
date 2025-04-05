import styled from '@emotion/styled';

interface UserImageProps {
  imageUrl: string;
}

export const Container = styled.div`
  width: 11.8125rem;
  height: 21.25rem;
  padding: 1.5rem 1.6875rem 1.75rem;
  display: flex;
  gap: 2.25rem;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[30]};
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

export const UserImage = styled.div<UserImageProps>`
  width: 8.4375rem;
  height: 8.4375rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
`;
