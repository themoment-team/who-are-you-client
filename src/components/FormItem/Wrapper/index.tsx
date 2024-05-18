import * as S from './style';

interface Props {
  title: string;
  required?: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}

const FormItemWrapper: React.FC<Props> = ({
  title,
  required,
  errorMessage,
  children,
}) => (
  <S.Container>
    <S.Title>
      {title}
      {required && <S.RequiredMessage>*</S.RequiredMessage>}
    </S.Title>
    {children}
    <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
  </S.Container>
);

export default FormItemWrapper;
