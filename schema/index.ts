import { allProgramNames } from '@constants/index';
import { z } from 'zod';

export const selectableOptions: any = [...allProgramNames]

export const userForm = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  whatsappNumber: z.string().min(10, {
    message: 'WhatsApp number must be at least 10 characters.',
  }),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'Email must be at least 2 characters',
  }),
  message: z.string().min(3, {
    message: 'Please Enter Your Message',
  }),
  intrestedProgram: z.enum(selectableOptions),
});

export type userFormInterface = z.infer<typeof userForm>;

type UserFormField = keyof userFormInterface;
