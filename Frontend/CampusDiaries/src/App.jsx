import { useState } from "react";
import "./App.css";
import SignUp from "./Components/SignUpPage/SignUp";
import Login from "./Components/LoginPage/Login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
