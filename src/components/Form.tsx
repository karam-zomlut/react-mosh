import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          {...register('name', { required: true, minLength: 3 })}
          id='name'
          type='text'
          className={`form-control ${errors.name?.type ? 'is-invalid' : ''}`}
        />
        {errors.name?.type === 'required' && (
          <p className='invalid-feedback'>The name field is required!</p>
        )}
        {errors.name?.type === 'maxLength' && (
          <p className='invalid-feedback'>The name must be at least 3 characters</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          {...register('age', { required: true, min: 1 })}
          id='age'
          type='number'
          className={`form-control ${errors.age?.type ? 'is-invalid' : ''}`}
        />
        {errors.age?.type === 'required' && (
          <p className='invalid-feedback'>The age field is required!</p>
        )}
        {errors.age?.type === 'min' && (
          <p className='invalid-feedback'>The age value unacceptable!</p>
        )}
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
