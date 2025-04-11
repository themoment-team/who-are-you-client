import styled from '@emotion/styled';

export const Container = styled.div`
  width: 21.25rem;
  height: 11.875rem;
  padding: 1.9375rem 1.75rem 1.75rem 2.375rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[30]};
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
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 0.5rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;
