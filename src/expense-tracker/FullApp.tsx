import React, { useState } from 'react';
import { ExpenseFilter, ExpenseForm, ExpenseList } from './components';
import { FieldValues } from 'react-hook-form';

interface Expense {
  id: number;
  amount: number;
  description: string;
  category: string;
}

const FullApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, amount: 10, description: 'karamzomlot', category: 'Groceries' },
    { id: 2, amount: 4, description: 'karamzomlot', category: 'Utilites' },
    { id: 3, amount: 5, description: 'karamzomlot', category: 'Entertainment' },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const onSelectCategory = (category: string) => setSelectedCategory(category);

  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;

  const onSubmit = ({ amount, description, category }: FieldValues) => {
    const newExpense = {
      id: expenses.length + 1,
      amount: amount,
      description,
      category,
    };

    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseFilter onSelectCategory={onSelectCategory} />
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
};

export default FullApp;
