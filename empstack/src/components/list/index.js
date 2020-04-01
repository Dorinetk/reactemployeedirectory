import React from "react";
import "./style.css"
//import employees from "../../employees.json"
// Employee list generated with
//https://randomuser.me/api/?inc=id,picture,name,phone,email,dob&format=JSON&results=1000

class List extends React.Component{
  render () {
      //const oneEmployee = employees[0]; 
     const oneEmployee = this.props; 
      return (
          <div className ="container">
            <div className="row">
              <div className="col">
                <img scr={oneEmployee.thumbnail} alt={oneEmployee.name.first}/>
              </div>
              <div className="col">
                {oneEmployee.name.first} {oneEmployee.name.last} 
              </div>
              <div className="col">
                 {oneEmployee.phone} 
              </div>
              <div className="col">
                 {oneEmployee.email} 
              </div>
              <div className="col">
                {oneEmployee.dob.date} 
              </div>
             </div>
          </div>
     )
  }

}



export default List;