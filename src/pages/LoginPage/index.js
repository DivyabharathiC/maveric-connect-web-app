import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Endpoints from "../../api/Endpoints"

const LoginPage = () => {
    const [responseMessage, setResponseMessage] = useState({
        message: "",
        cssClass: "",
    });

    const [user, setUser] = useState({
       
        email: "",
        password: "",
    });

    function onChangeHandler(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    function onSubmitHandler(e) {
        e.preventDefault();

        axios

            .post(Endpoints.LOGIN_URL, user)

            .then(
                (response) => {

                    localStorage.setItem('token',response.data.token)
                    localStorage.setItem('user',JSON.stringify(response.data.user))
                    console.log(response.data);

                    setResponseMessage({
                        message: 'Login successful',
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

            .catch((error) => console.log(error));
    }
    return (
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <div className="wrapper">
                  
                    <hr />

                    {responseMessage.message && (
                        <div class="alert alert-success" role="alert">
                            {responseMessage.message}
                        </div>
                    )}
                   

                    <form onSubmit={onSubmitHandler}>
                        
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
                            value="Login"
                            className="btn btn-primary btn-block"
                        />
                        <br />
                        <p>
                            <a href="#">Already register? Click Here</a>
                        </p>
                    </form>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    );
};
export default LoginPage;
