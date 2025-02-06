<<<<<<< HEAD
import { useState } from 'react';
import SignUp from './Components/SignUpPage/SignUp';
import Login from './Components/LoginPage/Login';
import Querypage from './Components/QueryPage/Query';


function App() {
  return (
    <div>
    <Querypage/>
      {/* <SignUp/> 
      <Login/>
      */}

    </div>
=======
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
>>>>>>> a5c70d7845d268ae03814892e82d43c335d4f797
  );
}

export default App;
