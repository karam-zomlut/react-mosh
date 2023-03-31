import { useState } from 'react';
import { ExpenseFilter, ExpenseForm, ExpenseList } from './expense-tracker';
import { FieldValues } from 'react-hook-form';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
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

  const onSubmit = (data: FieldValues) => {
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  };

  return (
    <div>
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseFilter onSelectCategory={onSelectCategory} />
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
}

export default App;
