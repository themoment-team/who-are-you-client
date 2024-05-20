import styled from '@emotion/styled';

export const Container = styled.div`
  width: 32.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.p`
  display: inline;
  ${({ theme }) => theme.typo.subtitle}
  color: ${({ theme }) => theme.color.gray[70]};
`;

export const RequiredMessage = styled.span`
  color: ${({ theme }) => theme.color.primary[30]};
`;

export const ErrorMessage = styled.p`
  height: 1.125rem;
  ${({ theme }) => theme.typo.caption}
  color: ${({ theme }) => theme.color.error};
`;
