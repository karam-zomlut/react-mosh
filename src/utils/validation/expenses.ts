import { z } from 'zod';
import { categories } from '../../expense-tracker';

const expensesSchema = z.object({
  description: z
    .string({ required_error: 'Description is required!' })
    .min(3, { message: 'Description should be at least 3 characters' })
    .max(50, { message: 'Description should be at most 3 characters' }),
  amount: z
    .number({ invalid_type_error: 'Amount is required!' })
    .min(0.01, { message: 'Invalid amount value!' })
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({message: 'Category is required!'})
  }),
});

export default expensesSchema;
