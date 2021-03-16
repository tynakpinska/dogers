import React from "react";
import "./Login.scss";

const LogIn = ({ open }) => {
  return (
    <div className={open ? "login open" : "login"}>
      <h2 className="login-header">Log in</h2>
      <form className="login-form">
        <label className="login-label" htmlFor="name">
          Login:{" "}
        </label>
        <input className="login-input" type="text" name="name" required />
        <label className="login-label" htmlFor="email">
          Password:{" "}
        </label>
        <input className="login-input" type="password" name="email" required />
        <input className="login-input__button" type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default LogIn;
