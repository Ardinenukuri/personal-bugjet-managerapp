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
      <h1 className="text-center mt-4">Personal Budget Manager</h1>

      {/* Navigation Links */}
      <div className="mt-4 mb-4 d-flex justify-content-between">
        <Link to="/expenses-list" className="btn btn-primary">View Expenses List</Link>
        <Link to="/add-expense" className="btn btn-success">Add Expense</Link>
      </div>

      {/* Budget Alerts */}
      <BudgetAlerts budget={budget} expenses={expenses} />

      {/* Budget Summary */}
      <BudgetSummary budget={budget} expenses={expenses} />

      {/* Expense Summary Chart */}
      <ExpenseSummaryChart expenses={expenses} />
    </div>
  );
};

export default MainPage;
