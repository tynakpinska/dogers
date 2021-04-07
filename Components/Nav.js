import React from "react";
import "./Nav.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "../Components/Content";
import Home from "../Routes/Home";
import LogIn from "../Routes/LogIn";
import Register from "../Routes/Register";

const Nav = ({ open }) => {
  return (
    <Router>
      {open ? (
        <nav>
          <ul className="menu">
            <li className="menu__item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu__item">
              <Link to="/login">Log In</Link>
            </li>
            <li className="menu__item">
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
        <Route path="/owner">
          <Content open={open} content="owner" />
        </Route>
        <Route path="/walker">
          <Content open={open} content="walker" />
        </Route>
        <Route path="/">
          <Content open={open} content="home" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
