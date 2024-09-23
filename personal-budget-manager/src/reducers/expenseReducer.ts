interface Expense {
    amount: number;
    date: string;
    category: string;
  }
  
  interface Action {
    type: string;
    payload: Expense;
  }
  
  const expenseReducer = (state: Expense[], action: Action): Expense[] => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default expenseReducer;
  