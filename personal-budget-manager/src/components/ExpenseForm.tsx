import React, { useState } from 'react';
import { Link } from 'react-router-dom';


interface AddExpensePageProps {
  dispatch: React.Dispatch<any>;
}

const AddExpensePage: React.FC<AddExpensePageProps> = ({ dispatch }) => {
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [category, setCategory] = useState<string>('General');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_EXPENSE',
      payload: { amount, date, category }
    });
    setAmount(0);
    setDate('');
    setCategory('General');
  };

  return (
    <div className="container mt-4">
      <h2>Add New Expense</h2>
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
            {/* Add more categories as needed */}
          </select>
        </div>
        <button type="submit" className="btn btn-success">Add Expense</button>
      </form>

      <div className="mt-4 mb-4 d-flex justify-content-between">
        <Link to="/expenses-list" className="btn btn-primary">View Expenses List</Link>
        </div>
          
      
    </div>
  );
};

export default AddExpensePage;
