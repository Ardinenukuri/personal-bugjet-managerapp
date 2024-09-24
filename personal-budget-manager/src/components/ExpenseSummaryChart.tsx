import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

interface ExpenseSummaryChartProps {
  expenses: { amount: number, category: string }[];
}

const ExpenseSummaryChart: React.FC<ExpenseSummaryChartProps> = ({ expenses }) => {
  const categories = ['General', 'Food', 'Transportation'];  // Add more categories as needed
  const data = categories.map(category => {
    return expenses.filter(expense => expense.category === category)
                   .reduce((total, expense) => total + expense.amount, 0);
  });

  return (
    <div>
      <h2>Expense Summary</h2>
      <Pie data={{
        labels: categories,
        datasets: [{
          data,
          backgroundColor: ['#28a745', '#0f0e0e', '#FFCE56']
        }]
      }} />
    </div>
  );
};

export default ExpenseSummaryChart;