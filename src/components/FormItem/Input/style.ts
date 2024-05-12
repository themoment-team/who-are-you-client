import styled from '@emotion/styled';

export const CustomInput = styled.input<{ isError: boolean }>`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.black};
  padding: 0.75rem 1rem;
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.gray[10]};
  border-radius: 0.625rem;

  ::placeholder {
    ${({ theme }) => theme.typo.h3};
    color: ${({ theme }) => theme.color.gray[40]};
  }

  :focus {
    outline: none;
    border: 0.0625rem solid
      ${({ theme, isError }) =>
        isError ? theme.color.error : theme.color.gray[40]};
  }
`;
