import React from "react";

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
  render() {
    return (
      <section style={styles.sectionStyles} className="section">
        <form className="form-group mx-auto py-5" style={styles.formStyles}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </section>
    );
  }
}

export default Search;
