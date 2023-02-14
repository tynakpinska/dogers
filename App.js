import React, { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import LogIn from "./Routes/LogIn/LogIn";
import Register from "./Routes/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Router>
        <Header open={open} setOpen={setOpen} />
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
          <Route path="/walkers-list">
            <Content open={open} content="walkers-list" />
          </Route>
          <Route path="/dogs-list">
            <Content open={open} content="dogs-list" />
          </Route>
          <Route path="/owner-form">
            <Content open={open} content="owner-form" />
          </Route>
          <Route path="/walker-form">
            <Content open={open} content="walker-form" />
          </Route>
          <Route path="/">
            <Content open={open} content="home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
