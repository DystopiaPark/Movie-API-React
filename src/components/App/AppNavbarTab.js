import React from "react";
import { Link } from "react-router-dom";

const AppNavbarTab = ({ value }) => {
  return (
    <Link to={value === "home" ? "/" : value}>
      <h2 style={{ color: "white", paddingLeft: "1rem" }}>{value}</h2>
    </Link>
  );
};

export default AppNavbarTab;
