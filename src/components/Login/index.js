import React from "react";
import LoginPage from "../../pages/LoginPage";
import Footer from "../Footer";
import Header from "../Header";

function Login() {
  return (
    <div className="Login">
      <Header/>

      <LoginPage/>

      <br></br>

     <Footer/>
    </div>
  );
}

export default Login;
