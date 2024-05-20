import type { userInfoFormSchema } from '@/schemas';

import type { z } from 'zod';

export type userInfoFormType = z.infer<typeof userInfoFormSchema>;
