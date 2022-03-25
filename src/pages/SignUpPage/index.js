import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./styles.css";
import Endpoints from "../../api/Endpoints";

const SignUpPage = () => {
  const [responseMessage, setResponseMessaage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post(Endpoints.REGISTER_URL, user)
      .then(
        (response) => {
          console.log(response.data);
          setResponseMessaage({
            message: response.data.message,
            cssClass: 'alert-success'
          });
        },
        (error) => {
          setResponseMessaage({
            message: error.response.data.message,
            cssClass: 'alert-danger'
          });
        }
      )
      .catch((error) => console.log(error));
  }

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          
         

         {responseMessage.message && (
              <div class="alert alert-success" role="alert">
              { responseMessage.message }
            </div>
         )}

          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
             
              <input
                type="text"
                name="userName"
                value={user.userName}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Username"
              />
              <div class="valid-feedback">
        Looks good!
      </div>
            </div>
            <div className="form-group">
             
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              
              <input
                type="password"
                name="password"
                value={user.confirmPassword}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <input
              type="submit"
              value="SignUp"
              className="btn btn-primary btn-block"
            />
            <br />
            <p>
              <a href="#">Already Registered ? Login</a>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default SignUpPage;
