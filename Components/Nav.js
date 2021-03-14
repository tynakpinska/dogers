import React from "react";
import "./Nav.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Routes/Home";
import LogIn from "../Routes/LogIn";
import Register from "../Routes/Register";

const Nav = ({ open }) => {
  return (
    <Router>
      <div>
        {open ? (
          <nav>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        ) : null}

        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
