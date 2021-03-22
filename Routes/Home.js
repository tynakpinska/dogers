import React from "react";
import "Home.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Walker from "./Walker";
import Owner from "./Owner";

const Home = ({ open }) => {
  return (
    <div className={open ? "hero open" : "hero"}>
      <Router>
        <Switch>
          <Route path="/owner">
            <Owner />
          </Route>
          <Route path="/walker">
            <Walker />
          </Route>
          <Route path="/">
            <p className="hero__text">
              Explore our community of dog walkers or find a dog to pet
            </p>
            <Link to="/owner" className="hero__button hero__button--first">
              I have a dog
            </Link>
            <Link to="/walker" className="hero__button hero__button--second">
              I'm a walker
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
