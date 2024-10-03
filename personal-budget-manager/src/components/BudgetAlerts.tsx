interface BudgetAlertsProps {
  budget: number;
  expenses: { amount: number }[];
}

const BudgetAlerts: React.FC<BudgetAlertsProps> = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const nearingLimit = totalExpenses > 0.8 * budget;
  const exceedingBudget = totalExpenses > budget;

  return (
    <>
      {nearingLimit && !exceedingBudget && (
        <p style={{ color: 'orange' }}>Warning: You're nearing your budget limit!</p>
      )}
      {exceedingBudget && (
        <p style={{ color: 'red' }}>Alert: You've exceeded your budget!</p>
      )}
    </>
  );
};

export default BudgetAlerts;
