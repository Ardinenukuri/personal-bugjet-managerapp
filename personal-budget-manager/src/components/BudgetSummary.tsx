import React, { useState } from 'react';

interface BudgetSummaryProps {
  budget: number;
  expenses: { amount: number }[];
  onBudgetChange: (newBudget: number) => void; 
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ budget, expenses, onBudgetChange }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = () => {
    onBudgetChange(newBudget);
    setIsEditing(false);
  };

  

  return (
    <div>
      <h2>Budget Summary</h2>
      {isEditing ? (
        <div>
          <input
            type="number"
            value={newBudget}
            onChange={(e) => setNewBudget(Number(e.target.value))}
          />
          <button onClick={handleBudgetChange}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Total Budget: ${budget}</p>
          <p>Total Spent: ${totalExpenses}</p>
          <button onClick={() => setIsEditing(true)}>Edit Budget</button>
        </div>
      )}
    </div>
  );
};

export default BudgetSummary;
