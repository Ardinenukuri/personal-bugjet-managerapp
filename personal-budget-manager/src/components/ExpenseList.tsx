import React from 'react';

interface Expense {
  amount: number;
  date: string;
  category: string;
}

interface ExpenseListPageProps {
  expenses: Expense[];
}

const ExpenseListPage: React.FC<ExpenseListPageProps> = ({ expenses }) => {
  return (
    <div className="container mt-4">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="list-group">
          {expenses.map((expense, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {expense.category}: ${expense.amount} on {expense.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseListPage;
