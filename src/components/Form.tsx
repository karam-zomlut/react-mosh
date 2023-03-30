import React, { FormEvent, useState } from 'react';

let renders = 0;
const Form = () => {
  console.log(renders);
  renders++;
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          id='name'
          type='text'
          className='form-control'
          value={person.name}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          id='age'
          type='number'
          className='form-control'
          value={person.age}
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
