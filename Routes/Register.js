import React from "react";
import "./Register.scss";

const Register = ({ open }) => {
  return (
    <div className={open ? "register open" : "register"}>
      <h2 className="register-header">Register</h2>
      <form className="register-form">
        <label className="register-label" htmlFor="login">
          Login:{" "}
        </label>
        <input className="register-input" type="text" name="login" required />
        <label className="register-label" htmlFor="email">
          Email:{" "}
        </label>
        <input className="register-input" type="email" name="email" required />
        <label className="register-label" htmlFor="password">
          Password:{" "}
        </label>
        <input
          className="register-input"
          type="password"
          name="password"
          required
        />
        <input
          className="register-input__button"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
