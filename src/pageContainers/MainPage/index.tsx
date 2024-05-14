import * as S from './style';

import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Header, InputFormItem, SelectFormItem } from '@/components';
import { userInfoFormSchema } from '@/schemas';
import type { userInfoFormType } from '@/types';
// import { useEffect } from 'react';

const MainPage = () => {
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
      mbti: 'mbti를 선택해주세요.',
    },
  });

  const onSubmit: SubmitHandler<userInfoFormType> = (data) => {
    const body = {
      ...data,
      generation: Number(data.mbti),
    };
    console.log(body);
    console.log('hello');
  };

  const onError: SubmitErrorHandler<userInfoFormType> = () => {
    // toast.error('입력 정보를 다시 확인해주세요.');
    console.log('error');
  };

  const handleContinueButtonClick = () => {
    handleSubmit(onSubmit, onError)();
  };

  const MBTI_ARRAY = [
    'ISTJ',
    'ISFJ',
    'INFJ',
    'INTJ',
    'ISTP',
    'ISFP',
    'INFP',
    'INTP',
    'ESTP',
    'ESFP',
    'ENFP',
    'ENTP',
    'ESTJ',
    'ESFJ',
    'ENFJ',
    'ENTJ',
  ];

  // useEffect(() => {
  //   toast.info('멘티 정보 등록 후에 서비스 이용이 가능합니다.');
  // }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <Header />
          <S.TextContainer>
            <S.TextBox>
              <S.Text>
                후아유에 오신걸 환영합니다! <br />
                먼저, 명함에 들어갈 정보들을 입력해주세요.
              </S.Text>
            </S.TextBox>
          </S.TextContainer>

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
              required
            />
            <InputFormItem
              {...register('major')}
              inputTitle='전공/직함'
              placeholder='전공/직함을 입력해주세요.'
              errorMessage={errors.major?.message}
            />
            <SelectFormItem
              {...register('mbti')}
              selectTitle='MBTI'
              defaultValue='MBTI를 선택해주세요.'
              options={[...MBTI_ARRAY]}
              errorMessage={errors.mbti?.message}
            />
            <S.BottomContainer>
              <S.ContinueButton onClick={handleContinueButtonClick}>
                <S.ContinueText>계속</S.ContinueText>
              </S.ContinueButton>
            </S.BottomContainer>
          </S.InputContainer>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
