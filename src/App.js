import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onTodoChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === "") return;
    for(let i of todos) {
      if(todo === i) return;
    }
    setTodo("");
    setTodos(todos => [todo, ...todos]);
  };
  const onDelete = (event) => {
    setTodos(todos => todos.filter(e => e !== todos[event.target.value]))
  }

  return (
    <div className="App">
      <h1>There are {todos.length} todos.</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onTodoChange} value={todo} type='text' placeholder='Write your Todo...' />
        <button>submit</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => <li key={index}>{item} <button onClick={onDelete} value={index}>delete</button></li>)}
      </ul>
    </div>
  );
}

export default App;
