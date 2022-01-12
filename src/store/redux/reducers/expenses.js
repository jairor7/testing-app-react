import { expenseTypes } from "../types";

const expensesReducerDefaultState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case expenseTypes.ADD_EXPENSE:
      return [...state, action.expense];
    case expenseTypes.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case expenseTypes.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
