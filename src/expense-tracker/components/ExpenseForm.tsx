import React from 'react';
import { z } from 'zod';
import { expensesSchema } from '../../utils';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

type ExpenseFormData = z.infer<typeof expensesSchema>;

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const ExpenseForm = ({onSubmit}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expensesSchema),
  });
  return (
    <form className='mb-5' onSubmit={handleSubmit(data => {
      onSubmit(data);
      reset();
    })}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          id='description'
          type='text'
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
        />
        {errors.description && (
          <p className='invalid-feedback'>{errors.description.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id='amount'
          type='number'
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
        />
        {errors.amount && (
          <p className='invalid-feedback'>{errors.amount.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select
          {...register('category')}
          id='category'
          className={`form-select ${errors.description ? 'is-invalid' : ''}`}
        >
          <option value=''></option>
          {categories.map((ctg) => (
            <option key={ctg} value={ctg}>
              {ctg}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className='invalid-feedback'>{errors.category.message}</p>
        )}
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpenseForm;
