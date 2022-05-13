import "./App.css";
import React from "react";

export default function App() {
  const [grade, setGrade] = React.useState([]);

  const [todos, setTodos] = React.useState([]);

  return (
    <div>
      <h1>Finals Grade Calculator</h1>
      <p>
        This program will allow you to find out what grade you need on your
        final to get the grade you want in the class you can put you're curent
        grade in the first input section and youre desired grade in the seccond.
      </p>
      <h1>Class</h1>
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />

      <h1>Grade</h1>
      <GradeList grade={grade} />
      <AddGrade setGrade={setGrade} />
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
    const inputRef = React.useRef();

    function handleAddTodo(event) {
      event.preventDefault();
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: 4,
        text,
        done: false,
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
  function GradeList({ grade }) {
    return (
      <ul>
        {" "}
        {grade.map((grade) => (
          <li key={grade.id}>{grade.text}</li>
        ))}
      </ul>
    );
  }
  function AddGrade({ setGrade }) {
    const inputRef = React.useRef();

    function handleAddGrade(event) {
      event.preventDefault();
      const text = event.target.elements.addGrade.value;
      const grade = {
        id: 4,
        text,
        done: false,
      };
      setGrade((prevGrade) => {
        return prevGrade.concat(grade);
      });
    }
    return (
      <form onSubmit={handleAddGrade}>
        <input name="addGrade" placeholder="Add grade" ref={inputRef} />
        <button type="submit"> submit</button>
      </form>
    );
  }
}
