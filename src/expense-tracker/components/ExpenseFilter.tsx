import React from 'react';
import categories from '../categories';


interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className='form-select mb-3'
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value=''>All categories</option>
      {categories.map((ctg) => (
        <option key={ctg} value={ctg}>
          {ctg}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
