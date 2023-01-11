import { useState } from "react";

import "./App.css";
import { SnackBar, Switch, Table } from "./components";

function App() {
  const [count, setCount] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <SnackBar />

      <Switch
        isChecked={isChecked}
        handleChange={() => setIsChecked((prev) => !prev)}
        size="small"
      />
    </div>
  );
}

export default App;
