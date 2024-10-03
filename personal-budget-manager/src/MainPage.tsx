import React from 'react'; 
import { Link } from 'react-router-dom';
import BudgetSummary from './components/BudgetSummary';
import ExpenseSummaryChart from './components/ExpenseSummaryChart';
import BudgetAlerts from './components/BudgetAlerts';

interface MainPageProps {
  budget: number;
  expenses: { amount: number; date: string; category: string }[];
  onBudgetChange: (newBudget: number) => void; 
}

const MainPage: React.FC<MainPageProps> = ({ budget, expenses, onBudgetChange }) => {
  return (
    <div className="container">
      <h1 className="text-center">Personal Budget Manager</h1>

      <div className="summary-container">
        <div className="button-group">
          <Link to="/expenses-list" className="btn btn-primary">
            View Expenses List
          </Link>
          <Link to="/add-expense" className="btn btn-success">
            Add Expense
          </Link>
        </div>

        {/* Pass onBudgetChange to BudgetSummary */}
        <BudgetSummary budget={budget} expenses={expenses} onBudgetChange={onBudgetChange} />

        <BudgetAlerts budget={budget} expenses={expenses} />
        <ExpenseSummaryChart expenses={expenses} />
      </div>
    </div>
  );
};

export default MainPage;
