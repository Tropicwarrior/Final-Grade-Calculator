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

export default App;
