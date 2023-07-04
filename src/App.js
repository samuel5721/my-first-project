import './App.css';
import { useEffect, useState } from 'react';
import "./calculatorTable.css"; 

function App() {
  return (
    <div className="App">
      <h1>계산기</h1>
      <div id="calculator">
        <div id="window">0</div>
        <div className='calRow'>
          <button className='calBtn'>◀</button>
          <button className='calBtn'>C</button>
          <button className='calBtn'>%</button>
          <button className='calBtn'>÷</button>
        </div>
        <div className='calRow'>
          <button className='calBtn'>7</button>
          <button className='calBtn'>8</button>
          <button className='calBtn'>9</button>
          <button className='calBtn'>×</button>
        </div>
        <div className='calRow'>
          <button className='calBtn'>4</button>
          <button className='calBtn'>5</button>
          <button className='calBtn'>6</button>
          <button className='calBtn'>-</button>
        </div>
        <div className='calRow'>
          <button className='calBtn'>1</button>
          <button className='calBtn'>2</button>
          <button className='calBtn'>3</button>
          <button className='calBtn'>+</button>
        </div>
        <div className='calRow'>
          <button className='calBtn'>+/-</button>
          <button className='calBtn'>0</button>
          <button className='calBtn'>.</button>
          <button className='calBtn'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
