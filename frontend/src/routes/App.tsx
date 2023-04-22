import React from "react";
import SiteNavbar from "../components/SiteNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <SiteNavbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
