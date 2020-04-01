import React from "react";
import List from "./list/index";
import ListHeader from "./ListHeader";
import employees from "../employees.json"

const employeeList = (props)  => {

    return (
      <div>

        <ListHeader />
        {/* Check on employees.id, is it unique? */}
        {employees.map(employee => <List key={employees.id} {...employee}/>)}

      </div>
    );
}
export default employeeList;