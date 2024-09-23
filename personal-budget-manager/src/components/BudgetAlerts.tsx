interface BudgetAlertsProps {
    budget: number;
    expenses: { amount: number }[];
  }
  
  const BudgetAlerts: React.FC<BudgetAlertsProps> = ({ budget, expenses }) => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const nearingLimit = totalExpenses > 0.8 * budget;
  
    return nearingLimit ? <p style={{ color: 'red' }}>Warning: You're nearing your budget limit!</p> : null;
  };
  
  export default BudgetAlerts;
  