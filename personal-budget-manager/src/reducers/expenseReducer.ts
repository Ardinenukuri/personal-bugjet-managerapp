interface Expense {
  amount: number;
  date: string;
  category: string;
}

interface Action {
  type: string;
  payload?: Expense;
}

const expenseReducer = (state: Expense[], action: Action): Expense[] => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const newState = [...state, action.payload!];
      localStorage.setItem('expenses', JSON.stringify(newState)); // Save to localStorage
      return newState;

    default:
      return state;
  }
};

export default expenseReducer;
