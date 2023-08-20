import React, { useState } from "react";
import "./Login.scss";

const LogIn = ({ open }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_ORIGIN}`,
      },
      body: JSON.stringify({ login, password }),
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(JSON.parse(resp.body).result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleClick = () => {
    setErrorMessage("");
    if (!(login && password)) {
      setErrorMessage("Login and password are required");
    }
  };

  return (
    <div className={open ? "login open" : "login"}>
      <h2 className="login__header">Log in</h2>
      <form className="login__form" onSubmit={handleSubmit}>
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
        <p>{errorMessage}</p>
        <input
          className="login__input--button"
          type="submit"
          value="Log in"
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

export default LogIn;
