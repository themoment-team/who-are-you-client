import styled from '@emotion/styled';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.h1`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
  width: 32.75rem;
  margin: 3rem 0 2.25rem 0;
`;

export const ButtonBox = styled.div`
  width: 32.75rem;
  display: flex;
  justify-content: end;
  gap: 0.75rem;
  position: absolute;
  bottom: 2.5rem;
`;

export const ShotButton = styled.button`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary[30]};
  font-weight: 500;
  border-radius: 0.5rem;
  width: 7.875rem;
  height: 3rem;
`;

export const PreviewButton = styled(ShotButton)`
  color: ${({ theme }) => theme.color.primary[30]};
  border: 0.0625rem solid ${({ theme }) => theme.color.primary[30]};
  background-color: ${({ theme }) => theme.color.white};
`;
