import React from "react";
import AppNavbarTab from "./AppNavbarTab";

const AppNavbarTabs = () => {
  return (
    <div style={{ display: "block" }}>
      <AppNavbarTab value={"home"} />
      <AppNavbarTab value={"about"} />
    </div>
  );
};

export default AppNavbarTabs;
