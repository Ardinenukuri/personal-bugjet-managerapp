import React, { useReducer, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import expenseReducer from './reducers/expenseReducer';
import './App.css';

const App: React.FC = () => {
  // Load saved expenses from localStorage or default to an empty array
  const savedExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');

  const [expenses, dispatch] = useReducer(expenseReducer, savedExpenses);
  const [budget] = useState(1000); // Default budget

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainPage budget={budget} expenses={expenses} />}
          />
          <Route
            path="/expenses-list"
            element={<ExpenseList expenses={expenses} />}
          />
          <Route
            path="/add-expense"
            element={<ExpenseForm dispatch={dispatch} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
