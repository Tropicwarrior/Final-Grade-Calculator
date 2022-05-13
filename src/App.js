import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [dGrade, setDgrade] = useState([]);
  const addDgrade = (e) => {
    e.preventDefault();
    setDgrade([dGrade]);
    e.target.dGrade = "";
  };

  useEffect(() => {
    const json = JSON.stringify(dGrade);
    localStorage.setItem("dGrade", json);
  }, [dGrade]);

  const [grade, setGrade] = useState([]);
  const addGrade = (e) => {
    e.preventDefault();
    setGrade([grade]);
    e.target.grade = "";
  };
  useEffect(() => {
    const json = JSON.stringify(grade);
    localStorage.setItem("grade", json);
  }, [grade]);

<<<<<<< HEAD
  return (
    <div className="App">
      <h1>Finals Grade Calculator</h1>
      <p>
        This program will allow you to find out what grade you need on your
        final to get the grade you want in the class you can put you're curent
        grade in the first input section and youre desired grade in the seccond.
      </p>
      <h3>Current Grade</h3>
      <form onSubmit={addGrade}>
        <input type="text" name="note" />
        <input type="Submit" />
      </form>
      {grade.map((grade) => (
        <div key={grade.id}> {grade.text} </div>
      ))}
      <h3>Desired Grade</h3>
      <form onSubmit={addDgrade}>
        <input type="text" name="grade" />
        <input type="Submit" />
      </form>
      {grade.map((grade) => (
        <div key={grade.id}> {grade.text} </div>
      ))}
    </div>
  );
};
=======


export default function App() {
  import React from 'react';
 
  const [todos, setTodos] = react.useState([
  
  ]);

  return (
    <div>
    <h1>
          Finals Grade Calculator
        </h1>
        <p>
          This Program will allow you to find out what grade you need on your final to get the grade you want in the class
          you can put you're curret grade in the first imput section and youre desired grade in the seccond.
          
        </p>
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
}
}

>>>>>>> 0540f69c3ba410136b225f1fe5c60668a7bc3e86

export default App;
