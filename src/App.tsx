import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FormValidated } from "./components/form-validated";
import type { Developer } from "./types/developer";
import { Results } from "./components/results";

function App() {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState<Developer[]>([]);
  const [trash, setTrash] = useState<Developer[]>([]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <FormValidated
        onSubmit={(output) => {
          setResults([...results, output]);
        }}
      />
      {results.length === 0 ? (
        <h3>No Result</h3>
      ) : (
        <div>
          <h3>Results</h3>
          <Results
            results={results}
            buttonText="🗑️"
            onButton={(uuid) => {
              const removed = results.find((r) => r.uuid === uuid);
              if (!removed) return;
              setTrash([...trash, removed]);
              setResults(results.filter((v) => v.uuid !== uuid));
            }}
          />
        </div>
      )}
      {trash.length === 0 ? (
        <h3>No Trash</h3>
      ) : (
        <div>
          <h3>Trash</h3>
          <Results
            results={trash}
            buttonText="♻️"
            onButton={(uuid) => {
              const rollBack = trash.find((r) => r.uuid === uuid);
              if (!rollBack) return;
              setResults([...results, rollBack]);
              setTrash(trash.filter((v) => v.uuid !== uuid));
            }}
          />
        </div>
      )}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
