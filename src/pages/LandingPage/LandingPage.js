import React from 'react';
import "./LandingPage.css";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';


function LandingPage()
{
    return (
      <>
      <Login />
      <Register className="register_form_home"/>
      </>
    );
}
export default LandingPage;
