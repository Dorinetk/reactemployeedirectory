import React from "react";

const styles = {
  headerStyle: {
    background: "#0A3C8E",
    height: 200,
  },
  headingStyle: {
    margin: 0,
    textAlign: "center",
    fontSize: "3rem",
    color: "white",
    paddingTop: "75",
  },
  pStyle: {
    textAlign: "center",
    color: "white",
    fontSize: "1.5rem",
  },
};

const Header = () => {
  return (
    <header
      style={styles.headerStyle}
      className="header border-bottom border-danger py-5"
    >
      <h1 style={styles.headingStyle}>Employee Directory</h1>
      <p style={styles.pStyle}>
        Click on carrots to filter by heading or use the search box to narrow
        your results
      </p>
    </header>
  );
};

export default Header;
