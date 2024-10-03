# Personal Budget Manager

A simple React-based application that allows users to track their expenses and manage their budgets. Users can add, view, and visualize their expenses by category and set budget limits for each category. The app persists data using local storage, ensuring that expenses and budgets are retained even after closing the browser.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Core Components](#core-components)
- [State Management](#state-management)
- [License](#license)

## Features
- **Add Expense:** Users can input details such as amount, date, and category for each expense.
- **Add Category:** Users can create and manage new categories for their expenses.
- **View Expenses:** Display a list of all expenses, which can be filtered by category and date.
- **Expense Summary:** Provides a visual summary of expenses in the form of a pie chart.
- **Budget Limits:** Set budget limits for each category and display alerts when nearing the limit.
- **Change Budget:** Users can change their budget at any time, with updates saved to local storage.
- **Data Persistence:** All expenses and budget settings are stored in local storage, ensuring data retention between browser sessions.

## Technology Stack
- **React:** Front-end JavaScript framework
- **TypeScript:** Static typing for a better development experience
- **Chart.js:** Used for creating the expense summary chart
- **React Hooks:** `useState`, `useReducer` for state management
- **CSS:** For styling the components
- **Bootstrap:** For responsive design and styling

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/personal-budget-manager.git
    cd personal-budget-manager
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    npm start
    ```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

The application is live and deployed using GitHub Pages. You can access the app at the following link:

🔗 *[Live Demo](https://melodious-frangipane-f03bf4.netlify.app/)*

## Usage

- **Add Expense:** Click on the "Add Expense" form to input details such as amount, date, and category.
- **Add Category:** Use the designated section in the app to create new categories for your expenses.
- **Change Budget:** Update your budget in the budget settings, and it will be saved automatically.
- **View Expenses:** Scroll down to see a list of all expenses.
- **Visual Summary:** A pie chart displays a summary of expenses by category.
- **Budget Alerts:** When your total spending in a category reaches 80% of the budget limit, a warning message will appear.

## Core Components

- **ExpenseForm.tsx:** Component for adding expenses.
- **ExpenseList.tsx:** Displays the list of all added expenses.
- **BudgetSummary.tsx:** Shows total budget and total spending.
- **BudgetAlerts.tsx:** Displays alerts when expenses exceed the budget limit.
- **ExpenseSummaryChart.tsx:** Visualizes expenses by category using a pie chart.

## State Management

- **useState:** Manages simple state, such as budget and input fields.
- **useReducer:** Manages complex state, like the list of expenses and handling budget limits.
- **Reducer Logic:** The app uses a reducer to handle adding expenses to the list and managing total expenses for each category.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
