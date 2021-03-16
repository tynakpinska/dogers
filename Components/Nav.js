import React from "react";
import "./Nav.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Routes/Home";
import LogIn from "../Routes/LogIn";
import Register from "../Routes/Register";

const Nav = ({ open }) => {
  return (
    <Router>
      {open ? (
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/login">Log In</Link>
            </li>
            <li className="menu-item">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      ) : null}

      <Switch>
        <Route path="/login">
          <LogIn open={open} />
        </Route>
        <Route path="/register">
          <Register open={open} />
        </Route>
        <Route path="/">
          <Home open={open} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
