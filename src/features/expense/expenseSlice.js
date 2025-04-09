import { createSlice, nanoid } from "@reduxjs/toolkit";

let savedTransactions = [];
try {
  const stored = localStorage.getItem('transactions');
  if (stored && stored !== "undefined") {
    savedTransactions = JSON.parse(stored);
  }
} catch (e) {
  console.error("Failed to parse transactions from localStorage:", e);
}

const initialState = {
  expenses: savedTransactions
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const expense = {
        id: nanoid(),
        name: action.payload.name,
        amount: action.payload.amount
      }
      state.expenses.push(expense);
      localStorage.setItem('transactions', JSON.stringify(state.expenses));
    },
    removeTransaction: (state, action) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
      localStorage.setItem('transactions', JSON.stringify(state.expenses));
    }
  }
})

export const {addTransaction, removeTransaction} = expenseSlice.actions

export default expenseSlice.reducer