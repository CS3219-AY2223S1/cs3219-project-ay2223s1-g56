import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginBox">
      <h1>LOGIN</h1>
      <input type="text" placeholder="USERNAME" />
      <input type="password" placeholder="PASSWORD" />

      <div className="login-btn">Login</div>

      <p className="small-text">
        Don't have account? Sign up <Link to="/signup">here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
