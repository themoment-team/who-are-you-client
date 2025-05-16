import * as S from './style';

import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

import { zodResolver } from '@hookform/resolvers/zod';

import { InputFormItem } from '@/components';
import { userInfoFormSchema } from '@/schemas';
import type { userInfoFormType } from '@/types';
import { Flow } from '@/types';

interface Props {
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoFormType | null>>;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

const FormPage: React.FC<Props> = ({ setUserInfo, setFlow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userInfoFormType>({
    resolver: zodResolver(userInfoFormSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      major: '',
    },
  });

  const onSubmit: SubmitHandler<userInfoFormType> = (data) => {
    setUserInfo(data);
    toast.success('정보 등록에 성공하였습니다.');
    setFlow(Flow.SELECT_THEME_FLOW);
  };

  const onError: SubmitErrorHandler<userInfoFormType> = () => {
    toast.error('입력 정보를 다시 확인해주세요.');
  };

  const handleContinueButtonClick = () => {
    handleSubmit(onSubmit, onError)();
  };

  return (
    <S.MainContianer>
      <S.Text>명함에 들어갈 정보들을 입력해주세요.</S.Text>

      <S.InputContainer>
        <InputFormItem
          {...register('name')}
          inputTitle='이름'
          placeholder='이름을 입력해주세요.'
          errorMessage={errors.name?.message}
          required
        />
        <InputFormItem
          {...register('phoneNumber')}
          inputTitle='전화번호'
          placeholder='전화번호를 입력해주세요.'
          errorMessage={errors.phoneNumber?.message}
          required
        />
        <InputFormItem
          {...register('email')}
          inputTitle='이메일'
          placeholder='이메일을 입력해주세요.'
          errorMessage={errors.email?.message}
        />
        <InputFormItem
          {...register('major')}
          inputTitle='전공/직함'
          placeholder='전공/직함을 입력해주세요.'
          errorMessage={errors.major?.message}
        />
      </S.InputContainer>
      <S.BottomContainer>
        <S.ContinueButton onClick={handleContinueButtonClick}>
          <S.ContinueText>계속</S.ContinueText>
        </S.ContinueButton>
      </S.BottomContainer>
    </S.MainContianer>
  );
};

export default FormPage;
