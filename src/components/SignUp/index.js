import React from "react";
import SignUpPage from "../../pages/SignUpPage";
import Footer from "../Footer";
import Header from "../Header";

function SignUp() {
  return (
    <div className="SignUp">
      <Header/>

      <SignUpPage/>

      <br></br>

     <Footer/>
    </div>
  );
}

export default SignUp;