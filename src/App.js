import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const counter1 = () => {
    setCount(count + 1);
  };
  const counter2 = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
     
      <p>Count: {count}</p>
      
      <button onClick={counter1}>Add</button>
      <button onClick={counter2}>Sub</button>
    </div>
  );
}

export default App;