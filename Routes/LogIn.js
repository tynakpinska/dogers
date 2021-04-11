import React from "react";
import "./Login.scss";

const LogIn = ({ open }) => {
  return (
    <div className={open ? "login open" : "login"}>
      <h2 className="login__header">Log in</h2>
      <form className="login__form">
        <label className="login__label" htmlFor="name">
          Login:{" "}
        </label>
        <input className="login__input" type="text" name="name" required />
        <label className="login__label" htmlFor="password">
          Password:{" "}
        </label>
        <input className="login__input" type="password" name="password" required />
        <input className="login__input--button" type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default LogIn;
