import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 38.75rem;
  height: 100vh;
  height: 100dvh;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12.75rem;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 0rem 3rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const TextBox = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 2.25rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.gray[90]};
  ${({ theme }) => theme.typo.title};
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 0rem 3rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24.875rem;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 11.75rem;
`;

export const ContinueButton = styled.button`
  display: flex;
  width: 7.875rem;
  height: 3rem;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.primary[30]};
`;

export const ContinueText = styled.h3`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;
