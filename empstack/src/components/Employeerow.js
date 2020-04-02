import React from "react";
// Employee list generated with
//https://randomuser.me/api/?inc=login,picture,name,phone,email,dob&format=JSON&results=100&nat=US

class EmployeeRow extends React.Component {
  render() {
    return (
      <tr key={this.props.login.uuid}>
        <th scope="row">
          <img src={this.props.picture.thumbnail} alt={this.props.name.first} />
        </th>
        <td>
          {" "}
          {this.props.name.first} {this.props.name.last}
        </td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
        <td>{this.props.dob.date} </td>
      </tr>
    );
  }
}

export default EmployeeRow;
