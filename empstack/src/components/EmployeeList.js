import React from "react";
import employees from "../employees.json";
import EmployeeRow from "./Employeerow";



//function EmployeeList(props) {
  

class EmployeeList extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     employeeList : employees
  //   }
  //   function compareBy(key){
  //     return function(a,b){
  //       if (a[key] < b[key]) 
  //       {return -1}
  //       else if (a[key] > b[key]) {return 1} 
  //       return 0;
  //     }
  //   }
  //   sortBy = event => {
  //     event.PreventDefault();
  //     const employeeCopy = [...this.state.employees];
  //     employeeCopy.sort(this.compareBy(key));
  //     this.setState({employeeList: employeeCopy});
  //   }
    
  // }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
  
              {/* <th scope="col" onClick={this.sortBy} >Name</th> */}
              <th scope="col" >Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map(employee => (
              <EmployeeRow {...employee} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
  


export default EmployeeList;
