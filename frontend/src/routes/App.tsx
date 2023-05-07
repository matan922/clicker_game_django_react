import React, { useEffect } from "react";
import SiteNavbar from "../components/SiteNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { autoIncrement } from "../reducers/clickerSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function App() {
  const dispatch = useAppDispatch()
  const clicker = useAppSelector((state) => state.clicker);
  const workersValue = clicker.workers.value
  console.log(workersValue)


  useEffect(() => {
    if (workersValue >= 1) {
      const autoInc = setInterval(() => dispatch(autoIncrement()), 1000)
      return () => {
        clearInterval(autoInc)
      }  
    }
  }, [workersValue])
  
  return (
    <div>
      <SiteNavbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
