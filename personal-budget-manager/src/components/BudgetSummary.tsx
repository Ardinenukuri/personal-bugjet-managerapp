interface BudgetSummaryProps {
    budget: number;
    expenses: { amount: number }[];
  }
  
  const BudgetSummary: React.FC<BudgetSummaryProps> = ({ budget, expenses }) => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  
    return (
      <div>
        <h2>Budget Summary</h2>
        <p>Total Budget: ${budget}</p>
        <p>Total Spent: ${totalExpenses}</p>
      </div>
    );
  };
  
  export default BudgetSummary;
  