import React from "react";
import { Outlet } from "react-router-dom";
import StyledHeader from "../components/StyledHeader";

const Layout = () => {
  return (
    <main>
      <StyledHeader />
      <Outlet />
    </main>
  );
};

export default Layout;
