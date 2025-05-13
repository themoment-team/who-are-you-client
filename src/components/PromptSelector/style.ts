import styled from '@emotion/styled';

export const Container = styled.div`
  width: 32.75rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 0.7188rem;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
`;

export const PromptContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Prompt = styled.button<{ isSelected: boolean }>`
  ${({ theme }) => theme.typo.h3};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary[30] : theme.color.white};
  border: ${({ isSelected, theme }) =>
    isSelected
      ? `0.0625rem solid ${theme.color.primary[30]}`
      : `0.0625rem solid ${theme.color.gray[40]}`};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.white : theme.color.gray[70]};
  border-radius: 0.5rem;
  display: flex;
  padding: 0.5rem 1rem 0.375rem 1.0625rem;
  justify-content: center;
  align-items: center;
`;
