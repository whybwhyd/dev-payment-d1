import { z } from 'zod';

// const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// const phoneRegex = /^010\d{8}$/;

export const productSchema = z.object({
  postService: z.string(),
  payment: z.string(),
  //   email: z
  //     .string()
  //     .nonempty({ message: '이메일은 필수 입력값입니다.' })
  //     .email({ message: '올바른 이메일을 입력해주세요.' }),
  //   phone: z
  //     .string()
  //     .nonempty({ message: '전화번호는 필수 입력값입니다.' })
  //     .min(11, '연락처는 11자리여야 합니다.')
  //     .max(11, '연락처는 11자리여야 합니다.')
  //     .refine((value) => phoneRegex.test(value), '010으로 시작하는 11자리 숫자를 입력해주세요'),
});
