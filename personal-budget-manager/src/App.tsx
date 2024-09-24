import React, { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './MainPage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import expenseReducer from './reducers/expenseReducer';
//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App: React.FC = () => {
  const savedExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');
  const [expenses, dispatch] = useReducer(expenseReducer, savedExpenses);
  const [budget] = useState(1000); // Default budget
  const [editingExpense, setEditingExpense] = useState<{ amount: number; date: string; category: string } | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const navigate = useNavigate(); // You can now use useNavigate inside this component

  const handleDeleteExpense = (index: number) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: index });
  };

  const handleEditExpense = (index: number) => {
    setEditingExpense(expenses[index]);
    setEditingIndex(index);
    navigate('/add-expense'); // Navigate to the form
  };

  return (
    <div className="App">
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
