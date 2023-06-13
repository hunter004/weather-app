import './App.css';
import React from 'react';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's It Like Outside</h1>
      </header>
      <main>
        <Forecast/>
      </main>
      <footer>Page created by Hunter</footer>
    </div>
  );
}

export default App;
