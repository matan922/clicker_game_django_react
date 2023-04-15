import React from "react";
import SiteNavbar from "../components/SiteNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <SiteNavbar />
      <Outlet />
    </div>
  );
}

export default App;
