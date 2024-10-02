import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

interface ExpenseSummaryChartProps {
  expenses: { amount: number, category: string }[];
}

const ExpenseSummaryChart: React.FC<ExpenseSummaryChartProps> = ({ expenses }) => {
  const categories = JSON.parse(localStorage.getItem('categories') || '[]');

  const data = categories.map((category: { name: string }) => {
    return expenses.filter(expense => expense.category === category.name)
                   .reduce((total, expense) => total + expense.amount, 0);
  });

  return (
    <div>
      <h2>Expense Summary</h2>
      <Pie data={{
        labels: categories.map((category: { name: string }) => category.name),
        datasets: [{
          data,
          backgroundColor: categories.map((category: { color: string }) => category.color)
        }]
      }} />
    </div>
  );
};

export default ExpenseSummaryChart;
