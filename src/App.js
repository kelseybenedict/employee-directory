// imports
import './App.css';
import { useEffect, useState } from "react";
import React from "react";
import EmployeeTable from "./components/employees";
import Search from "./components/search";

function App() {
  // setting up a stateful employees array 
  const [employees, setEmployees] = useState([])
  // useEffect to replace componentDidMount
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=40")
    // convert data to json
    .then((response) => response.json())
    // set the state of the employees to the json results
    .then((data) => {
      setEmployees(data.results)
    })
  }, [])
  const handleSubmit = event => {
    event.preventDefault();
  };

  // handle searching/filtering by name 
  const search = event => {

  }
  // handle sorting by last name 
  return (
    <>
    <div className="App">
      <header className="App-header">
      Employee Directory
      </header>
      <Search 
      handleSubmit={handleSubmit}
      search={search}/>
      <EmployeeTable 
      employees={employees}/>
    </div>
    </>
  );
}

export default App;
