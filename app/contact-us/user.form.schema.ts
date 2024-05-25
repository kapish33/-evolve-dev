import { cva } from 'class-variance-authority';
import * as yup from 'yup';

export const schema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    age: yup.number().positive().integer().required('Age is required'),
    program: yup.string().required('Program selection is required'),
  })
  .required();

export type submitFormData = yup.InferType<typeof schema>;

export const formFields = cva(
  {
    input: '',
    label: '',
    error: '',
    button: '',
    select: '',
  },
  {
    variants: {
      input: {
        default:
          'shadow appearance-none border rounded w-full py-2 px-3 text-input leading-tight focus:outline-none focus:shadow-outline',
      },
      label: {
        default: 'block text-sm font-bold mb-2',
      },
      error: {
        default: 'text-red-500 text-xs italic',
      },
      button: {
        default: 'bg-primary hover:bg-accent text-primary-foreground',
      },
      select: {
        default:
          'shadow appearance-none border rounded w-full py-2 px-3 text-input leading-tight focus:text-gray-500 dark:focus:text-white focus:outline-none focus:shadow-outline',
      },
    },
  }
);
