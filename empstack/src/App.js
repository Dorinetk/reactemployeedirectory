import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import EmployeeList from "./components/EmployeeList";
//import employees from "./employees.json"

function App() {
  return (
    <div>
      <Header />
      <Search />
      <EmployeeList />
    </div>
  );
}

export default App;
