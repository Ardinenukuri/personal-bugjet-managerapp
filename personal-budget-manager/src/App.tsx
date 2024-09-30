import React, { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Removed Router
import MainPage from './MainPage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import expenseReducer from './reducers/expenseReducer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const savedExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');
  const [expenses, dispatch] = useReducer(expenseReducer, savedExpenses);
  const [budget] = useState(1000); // Default budget
  const [editingExpense, setEditingExpense] = useState<{ amount: number; date: string; category: string } | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleDeleteExpense = (index: number) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: index });
  };

  const handleEditExpense = (index: number) => {
    setEditingExpense(expenses[index]);
    setEditingIndex(index);
    navigate('/add-expense');
  };

  return (
    <div className="App container mt-5">
      <Routes>
        <Route
          path="/"
          element={<MainPage budget={budget} expenses={expenses} />}
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
