import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = ({ open, setOpen, toggleBurger }) => {
  const handleClick = () => {
    setOpen(false);
    toggleBurger();
  };

  return open ? (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <NavLink exact to="/" activeClassName="active" onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/login" activeClassName="active" onClick={handleClick}>
            Log In
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/register"
            activeClassName="active"
            onClick={handleClick}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  ) : null;
};

export default Nav;
