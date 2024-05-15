import styled from '@emotion/styled';

export const YesOrNoBox = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  ${({ theme }) => theme.typo.h2}
  border: 1px solid ${({ theme }) => theme.color.primary[30]};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.white : theme.color.gray[90]};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary[30] : theme.color.white};
  border-radius: 0.75rem;
  width: 15.75rem;
  height: 17.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;
