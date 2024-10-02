import React from 'react';
import { Link } from 'react-router-dom';
import './css/ExpenseList.css';

interface Expense {
  amount: number;
  date: string;
  category: string;
}

interface ExpenseListPageProps {
  expenses: Expense[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const ExpenseList: React.FC<ExpenseListPageProps> = ({ expenses, onDelete, onEdit }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Expense List</h1>

      <div className="button-group mb-4">
        <Link to="/add-expense" className="btn btn-success">Add New Expense</Link>
        <Link to="/" className="btn btn-secondary">Go to Dashboard</Link>
      </div>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="list-group">
          {expenses.map((expense, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {expense.category}: ${expense.amount} on {expense.date}
              </span>
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
