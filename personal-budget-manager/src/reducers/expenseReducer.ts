const expenseReducer = (state: any[], action: any): any[] => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];

    case 'EDIT_EXPENSE':
      return state.map((expense, index) =>
        index === action.payload.index ? action.payload.updatedExpense : expense
      );

    case 'DELETE_EXPENSE':
      return state.filter((_, index) => index !== action.payload);

    default:
      return state;
  }
};

export default expenseReducer;
