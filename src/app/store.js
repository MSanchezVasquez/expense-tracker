import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";
import budgetsReducer from "../features/budgets/budgetsSlice";

// Cargar estado inicial desde localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// Guardar estado en localStorage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch {}
}

const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
    transactions: transactionsReducer,
    user: (state = { name: "" }, action) => {
      switch (action.type) {
        case "SET_USERNAME":
          return { ...state, name: action.payload };
        default:
          return state;
      }
    },
  },
  preloadedState: loadState(),
});

// Guardar cada vez que cambia el estado
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

/* export default configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
  },
}); */
