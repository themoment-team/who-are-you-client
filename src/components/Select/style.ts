import styled from '@emotion/styled';

export const CustomSelect = styled.select<{
  isError: boolean;
  isDefault: boolean;
}>`
  ${({ theme }) => theme.typo.h3}
  width: 100%;
  color: ${({ theme, isDefault }) =>
    isDefault ? theme.color.gray[40] : theme.color.black};
  padding: 0.75rem 1rem;
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.gray[40]};
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;

  :disabled {
    background-color: ${({ theme }) => theme.color.gray[50]};
    color: ${({ theme }) => theme.color.gray[20]};
    cursor: default;
  }

  :focus {
    outline: none;
    border: 0.0625rem solid
      ${({ theme, isError }) =>
        isError ? theme.color.error : theme.color.gray[40]};
  }

  :default {
    color: ${({ theme }) => theme.color.gray[40]};
  }

  // 기본 화살표 제거
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;

export const Container = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
