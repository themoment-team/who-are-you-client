import styled from '@emotion/styled';

export const MainContianer = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
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
  font-weight: bold;
  margin: 2.5rem 0 2.25rem 0;
  width: 32.7rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 32.75rem;
  justify-content: flex-end;
  gap: 0.75rem;
  position: absolute;
  bottom: 2.5rem;
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
