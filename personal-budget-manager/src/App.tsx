// App.tsx
import React, { useReducer, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './MainPage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import expenseReducer from './reducers/expenseReducer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  // Retrieve expenses and budget from local storage
  const savedExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');
  const savedBudget = JSON.parse(localStorage.getItem('budget') || '1000');
  
  const [expenses, dispatch] = useReducer(expenseReducer, savedExpenses);
  const [budget, setBudget] = useState(savedBudget); // Initialize budget with saved value
  const [editingExpense, setEditingExpense] = useState<{ amount: number; date: string; category: string } | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  // Update local storage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Update local storage whenever the budget changes
  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  const handleDeleteExpense = (index: number) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: index });
  };

  const handleEditExpense = (index: number) => {
    setEditingExpense(expenses[index]);
    setEditingIndex(index);
    navigate('/add-expense');
  };

  const handleBudgetChange = (newBudget: number) => {
    setBudget(newBudget);
  };
  
  return (
    <div className="App container mt-5">
      <Routes>
        <Route
          path="/"
          element={<MainPage budget={budget} expenses={expenses} onBudgetChange={handleBudgetChange} />}
        />
        <Route
          path="/expenses-list"
          element={
            <ExpenseList
              expenses={expenses}
              onDelete={handleDeleteExpense}
              onEdit={handleEditExpense}
            />
          }
        />
        <Route
          path="/add-expense"
          element={
            <ExpenseForm
              dispatch={dispatch}
              editingExpense={editingExpense}
              editingIndex={editingIndex}
              setEditingIndex={setEditingIndex}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
