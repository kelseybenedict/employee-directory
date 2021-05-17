// imports
import './App.css';
import { useEffect, useState } from "react";
import React from "react";
import EmployeeTable from "./components/employees";
import Search from "./components/search";

function App() {
  // setting up a stateful employees array 
  const [employees, setEmployees] = useState([]);
  const [empData, setEmpData] = useState([]);
  // useEffect to replace componentDidMount
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=40")
    // convert data to json
    .then((response) => response.json())
    // set the state of the employees to the json results
    .then((data) => {
      setEmployees(data.results);
      setEmpData(data.results);
    })
  }, [])

  const handleSubmit = event => {
    event.preventDefault();
  };

  // handle searching/filtering by name 
  const search = event => {
    let data = employees.filter((item) =>{
      return(
        item.name.first.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    setEmpData(data);
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
      search={search} />
      <EmployeeTable 
      empData={empData}
      />
    </div>
    </>
  );
}

export default App;
