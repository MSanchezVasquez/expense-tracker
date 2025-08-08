import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];

const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { category, amount, description } = action.payload;
      if (amount === 0) return;
      if (description === "") return;
      if (description.length < 6)
        alert("Description must be at least 6 characters long");
      state[category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      const { category, id } = action.payload;
      state[category] = state[category].filter((item) => item.id !== id);
    },
  },
});

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
