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
    fetch("https://randomuser.me/api/?results=40&nat=us")
    // convert data to json
    .then((response) => response.json())
    // set the state of the employees to the json results
    .then((data) => {
      setEmployees(data.results);
      setEmpData(data.results);
    })
  }, [])
  // prevent default for searching
  const handleSubmit = event => {
    event.preventDefault();
  };

  // handle searching/filtering by name 
  const search = event => {
    // taking our user input and filtering the list of employees by first or last name
    let data = employees.filter((item) =>{
      return(
        // filtering by first OR last name
        // converting everything to lower case to make filtering user input simpler
        item.name.first.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.name.last.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    // setting the state back to our data
    setEmpData(data);
  }
 // handle sorting by last name in descending order
  const handleSort = () => {
    let sortedData = employees.sort((a, b) => {
    return a.name.last > b.name.last ? -1 : 1;
  });
    setEmployees([...sortedData]);
    
  }
  // handle sorting by last name 
  return (
    <>
    <div className="App">
      <header className="App-header">
      Employee Directory
      <p>Start typing an employee's first or last name to filter through the employee list. You can also sort by last name by clicking the arrow next to the "Last Name" column. </p>
      </header>
      <Search 
      handleSubmit={handleSubmit}
      search={search} />
      <EmployeeTable 
      empData={empData}
      handleSort={handleSort}
      />
    </div>
    </>
  );
}

export default App;
