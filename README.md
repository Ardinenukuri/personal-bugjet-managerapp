Personal Budget Manager
A simple React-based application that allows users to track their expenses and manage their budgets. Users can add, view, and visualize their expenses by category and set budget limits for each category.

Table of Contents
Features
Technology Stack
Installation
Usage
Core Components
State Management
License
Features
Add Expense: Users can input details such as amount, date, and category for each expense.
View Expenses: Display a list of all expenses, which can be filtered by category and date.
Expense Summary: Provide a visual summary of expenses in the form of a pie chart.
Budget Limits: Set budget limits for each category and display alerts when nearing the limit.
Technology Stack
React: Front-end JavaScript framework
TypeScript: Static typing for better development experience
Chart.js: Used for creating the expense summary chart
React Hooks: useState, useReducer for state management
CSS: For styling the components
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/personal-budget-manager.git
cd personal-budget-manager
Install dependencies:

bash
Copy code
npm install
Run the app:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Usage
Add Expense: Click on the "Add Expense" form to add the expense details, including amount, date, and category.
View Expenses: Scroll down to see a list of all expenses.
Visual Summary: A pie chart will display a summary of the expenses by category.
Budget Alerts: When your total spending in a category reaches 80% of the budget limit, a warning message will appear.
Core Components
ExpenseForm.tsx: Component for adding expenses.
ExpenseList.tsx: Displays the list of all added expenses.
BudgetSummary.tsx: Shows total budget and total spending.
BudgetAlerts.tsx: Displays alerts when expenses exceed the budget limit.
ExpenseSummaryChart.tsx: Visualizes expenses by category using a pie chart.
State Management
useState: Manages simple state, such as budget and input fields.
useReducer: Manages complex state, like the list of expenses and handling budget limits.
Reducer Logic: The app uses a reducer to handle adding expenses to the list and managing total expenses for each category.
License
This project is licensed under the MIT License. See the LICENSE file for details.
