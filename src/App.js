import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const addCounter = () => setCounter((counter) => counter + 1);
  console.log("api 호출");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{counter}</h2>
        <button onClick={addCounter}>click me</button>
      </header>
    </div>
  );
}

export default App;
