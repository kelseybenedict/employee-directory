// imports
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import React from "react";

function App() {
  // setting up a stateful employees array 
  const [employees, setEmployees] = useState([])
  // useEffect to replace componentDidMount
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=40")
    .then((response) => response.json)
    .then((data) => {
      setEmployees(data.results)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      Employee Directory
      </header>
    </div>
  );
}

export default App;
