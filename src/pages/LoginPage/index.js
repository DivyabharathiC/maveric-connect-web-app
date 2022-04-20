import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Endpoints from "../../api/Endpoints.js";
import { Link , useNavigate } from "react-router-dom";
import PostListsPage from "../HomePage/PostListsPage";


const LoginPage = () => {
  let navigate = useNavigate();

  const [responseMessage, setResponseMessage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    axios
      .post(Endpoints.LOGIN_URL, user)
      .then(
        (response) => {
          
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          console.log(response.data);
          setResponseMessage({
            message: "login successful",
            cssClass: "alert-success",
          });
        },
        (error) => {
          setResponseMessage({
            message: error.response.data.message,
            cssClass: "alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });
     
    
  }

  function onChangeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function onClickHandler(e) {
    e.preventDefault();
    navigate("/home/postlistpage");
  }


  return (
    <div className="wrapper">
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper text-center">
         
          <br />
          {responseMessage.message && (
            <div className="alert alert-success" role="alert">
              {responseMessage.message}
            </div>
          )}
          <form onSubmit={onClickHandler}>
            <div className="form-group">
              <input
                type="text"
                name="email"
                onChange={onChangeHandler}
                className="form-control"
                value={user.email}
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={onChangeHandler}
                className="form-control"
                value={user.password}
                placeholder="password"
              />
            </div>
            <input
                type="submit"
                value="login"
                className="btn btn-primary btn-block"
              />
            
            <br />
            <a href="/signup">
                <br />
                New to Maveric Book? signup
              </a>
              <a href="#">
                <br />
                Forgot Password?
              </a>
            </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
    </div>
  );
};
export default LoginPage;
