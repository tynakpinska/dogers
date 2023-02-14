import React from "react";
import "./Register.scss";

const Register = ({ open }) => {
  return (
    <div className={open ? "register open" : "register"}>
      <h2 className="register__header">Register</h2>
      <form className="register__form">
        <label className="register__label" htmlFor="login">
          Login:{" "}
        </label>
        <input className="register__input" type="text" name="login" required />
        <label className="register__label" htmlFor="email">
          Email:{" "}
        </label>
        <input className="register__input" type="email" name="email" required />
        <label className="register__label" htmlFor="password">
          Password:{" "}
        </label>
        <input
          className="register__input"
          type="password"
          name="password"
          required
        />
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
