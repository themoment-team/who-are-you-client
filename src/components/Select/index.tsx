import { forwardRef } from 'react';

import * as S from './style';
import { SelectIcon } from '@/assets';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
}

/**
 * @param errorMessage - error message
 * @param options - options 배열
 */
const Select = forwardRef<HTMLSelectElement, Props>(
  ({ errorMessage, options, defaultValue, value, ...attributes }, ref) => (
    <S.Container>
      <S.CustomSelect
        isError={!!errorMessage}
        ref={ref}
        isDefault={value === defaultValue}
        value={value}
        {...attributes}
      >
        <option disabled hidden value={defaultValue}>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.CustomSelect>
      <SelectIcon />
    </S.Container>
  )
);

Select.displayName = 'Select';

export default Select;
