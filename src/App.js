import logo from './logo.svg';
import './App.css';



export default function App() {
  import React from 'react';
 
  const [todos, setTodos] = react.useState([
    { id: 1, text: "Wash Dishes", done: false },
    { id: 2, text: "Do Laundry", done: false },
    { id: 3, text: "Take Shower", done: false }
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );


function TodoList({ todos }) {
  console.log(todos);
  return (
    <ul>
      {" "}
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  const inputRef = react.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });

  }
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Finals Grade Calculator
        </h1>
        <p>
          This Program will allow you to find out what grade you need on your final to get the grade you want in the class
          you can put you're curret grade in the first imput section and youre desired grade in the seccond.
          
        </p>
  
      </header>
    </div>
  )
}
}


