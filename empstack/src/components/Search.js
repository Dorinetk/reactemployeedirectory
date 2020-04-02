import React from "react";
import EmployeeList from "./EmployeeList";
import employee_list from "../employees.json";
const styles = {
  sectionStyles: {
    background: "#F3F5F9",
    height: 150
  },
  formStyles: {
    width: 200
  }
};
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: employee_list,
      search: ""
    };
  }
  handleSearch = event => {
    event.preventDefault();
    this.setState({

      employees: this.state.employees.filter(emp =>
        emp.includes(this.state.search)
      ),
      search:""
    });
  };
  _handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      employees: employee_list.filter(emp =>
        emp.name.first.includes(this.state.search)
      )
    });
  };
  render() {
    return (
      <div>
        <section style={styles.sectionStyles} className="section">
          <form
            className="form-group mx-auto py-5"
            style={styles.formStyles}
            onSubmit={() => this.handleSearch}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              value={this.state.search}
              onChange={e => this._handleChange(e)}
            />
          </form>
        </section>
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}
export default Search;
