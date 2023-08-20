import React, { useState } from "react";
import "./Register.scss";

const Register = ({ open }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [role, setRole] = useState("walker");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(role)
    fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_ORIGIN}`,
      },
      body: JSON.stringify({ login, email, password, role }),
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(JSON.parse(resp.body).result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={open ? "register open" : "register"}>
      <h2 className="register__header">Register</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="login">
          Login:
        </label>
        <input
          className="register__input"
          type="text"
          name="login"
          value={login}
          onChange={e => setLogin(e.target.value)}
          required
        />
        <label className="register__label" htmlFor="email">
          Email:
        </label>
        <input
          className="register__input"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label className="register__label" htmlFor="password">
          Password:
        </label>
        <input
          className="register__input"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <label className="register__label" htmlFor="confirmPassword">
          Confirm password:
        </label>
        <input
          className="register__input"
          type="password"
          name="password"
          value={confirmedPassword}
          onChange={e => setConfirmedPassword(e.target.value)}
          required
        />

        <fieldset>
          <legend>Who are you?</legend>

          <div>
            <input
              type="radio"
              value="walker"
              name="role"
              defaultChecked
              onClick={e => setRole(e.target.value)}
            />
            <label htmlFor="walker">Dog walker</label>
          </div>

          <div>
            <input
              type="radio"
              value="owner"
              name="role"
              onClick={e => setRole(e.target.value)}
            />
            <label htmlFor="owner">Dog owner</label>
          </div>
        </fieldset>

        <input
          className="register__input--button"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
