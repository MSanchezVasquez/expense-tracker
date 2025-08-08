import Transactions from "../features/transactions/Transactions";
import Budgets from "../features/budgets/Budgets";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.name);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    setInputName(username || "");
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      dispatch({ type: "SET_USERNAME", payload: inputName });
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button type="submit">Guardar</button>
        </form>

        {username && <h2>Hola, {username} 👋</h2>}
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
