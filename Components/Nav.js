import React from "react";
import "./Nav.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Content from "../Components/Content";
import LogIn from "../Routes/LogIn";
import Register from "../Routes/Register";

const Nav = ({ open }) => {
  return (
    <Router>
      {open ? (
        <nav>
          <ul className="menu">
            <li className="menu__item">
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/login" activeClassName="active">Log In</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/register" activeClassName="active">Register</NavLink>
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
        <Route exact path="/">
          <Content open={open} content="home" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
