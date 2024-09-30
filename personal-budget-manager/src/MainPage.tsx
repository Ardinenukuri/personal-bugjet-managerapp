import React from 'react';
import { Link } from 'react-router-dom';
import BudgetSummary from './components/BudgetSummary';
import ExpenseSummaryChart from './components/ExpenseSummaryChart';
import BudgetAlerts from './components/BudgetAlerts';

interface MainPageProps {
  budget: number;
  expenses: { amount: number; date: string; category: string }[];
}

const MainPage: React.FC<MainPageProps> = ({ budget, expenses }) => {
  return (
    <div className="container">
      {/* Title centered at the top of the container */}
      <h1 className="text-center">Personal Budget Manager</h1>

      {/* Buttons on the left and summaries below */}
      <div className="summary-container">
        {/* Left-aligned buttons */}
        <div className="button-group">
          <Link to="/expenses-list" className="btn btn-primary">
            View Expenses List
          </Link>
          <Link to="/add-expense" className="btn btn-success">
            Add Expense
          </Link>
        </div>

        {/* Budget Summary */}
        <BudgetSummary budget={budget} expenses={expenses} />

        {/* Budget Alerts */}
      <BudgetAlerts budget={budget} expenses={expenses} />
    </div>

        {/* Expense Summary Chart */}
        <ExpenseSummaryChart expenses={expenses} />
      </div>

      
  );
};

export default MainPage;
