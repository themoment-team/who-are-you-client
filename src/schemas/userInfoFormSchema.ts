import { z } from 'zod';

export const userInfoFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '2글자 이상 입력해주세요.' })
    .max(4, { message: '4글자 이하로 입력해주세요.' })
    .regex(/^[가-힣]+$/, { message: '한글로 입력해주세요.' }),
  phoneNumber: z
    .string({ required_error: '전화번호를 입력해주세요.' })
    .max(11, { message: '전화번호를 제대로 입력해주세요.' })
    .optional(),
  email: z.string({ required_error: '이메일을 입력해주세요.' }).optional(),
  major: z.string({ required_error: '전공/직합을 입력해주세요.' }).optional(),
  mbti: z
    .string({
      required_error: 'MBTI를 선택해주세요.',
    })
    .optional(),
  instagram: z
    .string({
      required_error: 'SNS 아이디를 입력해주세요.',
    })
    .optional(),
});
