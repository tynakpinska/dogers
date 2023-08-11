import React, { useState } from "react";
import "./Login.scss";

const LogIn = ({ open }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={open ? "login open" : "login"}>
      <h2 className="login__header">Log in</h2>
      <form className="login__form">
        <label className="login__label" htmlFor="name">
          Login:
        </label>
        <input
          className="login__input"
          type="text"
          name="name"
          value={login}
          onChange={e => setLogin(e.target.value)}
          required
        />
        <label className="login__label" htmlFor="password">
          Password:
        </label>
        <input
          className="login__input"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input className="login__input--button" type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default LogIn;
