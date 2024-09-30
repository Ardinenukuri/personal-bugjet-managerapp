interface Expense {
  amount: number;
  date: string;
  category: string;
}

interface Action {
  type: string;
  payload?: any;
}

const expenseReducer = (state: any[], action: any): any[] => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const newState = [...state, action.payload];
      localStorage.setItem('expenses', JSON.stringify(newState)); // Save to localStorage
      return newState;

    case 'EDIT_EXPENSE':
      const updatedExpenses = state.map((expense, index) =>
        index === action.payload.index ? action.payload.updatedExpense : expense
      );
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses)); // Save updated list to localStorage
      return updatedExpenses;

    case 'DELETE_EXPENSE':
      const filteredExpenses = state.filter((_, index) => index !== action.payload);
      localStorage.setItem('expenses', JSON.stringify(filteredExpenses)); // Save updated list to localStorage
      return filteredExpenses;

    default:
      return state;
  }
};

export default expenseReducer;


