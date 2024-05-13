import styled from '@emotion/styled';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray[20]};
  box-sizing: border-box;
`;
