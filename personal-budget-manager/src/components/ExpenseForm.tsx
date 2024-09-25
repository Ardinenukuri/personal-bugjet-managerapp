import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./css/ExpenseForm.css";

interface ExpenseFormProps {
  dispatch: React.Dispatch<any>;
  editingExpense: { amount: number; date: string; category: string } | null;
  editingIndex: number | null;
  setEditingIndex: (index: number | null) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ dispatch, editingExpense, editingIndex, setEditingIndex }) => {
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [category, setCategory] = useState<string>('General');

  // Pre-fill the form if we are editing an existing expense
  useEffect(() => {
    if (editingExpense) {
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // Edit existing expense
      dispatch({
        type: 'EDIT_EXPENSE',
        payload: {
          index: editingIndex,
          updatedExpense: { amount, date, category }
        }
      });
      setEditingIndex(null); // Reset after editing
    } else {
      // Add new expense
      dispatch({
        type: 'ADD_EXPENSE',
        payload: { amount, date, category }
      });
    }

    // Reset form fields
    setAmount(0);
    setDate('');
    setCategory('General');
  };

  return (
    <div className="container mt-4">
      {/* Title centered at the top */}
      <h1 className="text-center">{editingIndex !== null ? 'Edit Expense' : 'Add New Expense'}</h1>

      {/* Buttons for navigation */}
      <div className="button-group mb-4">
        <Link to="/expenses-list" className="btn btn-primary">View Expenses List</Link>
        <Link to="/" className="btn btn-secondary">Go to Dashboard</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Amount"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          {editingIndex !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
