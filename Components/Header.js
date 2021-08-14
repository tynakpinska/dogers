import React from "react";
import "./Header.scss";
import Burger from "../Components/Burger";
import Nav from "../Components/Nav";

import { NavLink } from "react-router-dom";

const Header = ({ open, setOpen }) => {
  const toggleBurger = () => {
    document
      .querySelector(".burgerIcon__part--first")
      .classList.toggle("transformed");
    document
      .querySelector(".burgerIcon__part--middle")
      .classList.toggle("hidden");
    document
      .querySelector(".burgerIcon__part--last")
      .classList.toggle("transformed");
    document.querySelector(".burgerIcon").classList.toggle("transformed");
  };

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
    toggleBurger();
  };

  return (
    <>
      <header className="header">
        <NavLink exact to="/" activeClassName="active">
          <h1>Dogers</h1>
        </NavLink>
        <Burger handleClick={handleClick} />
      </header>
      <Nav open={open} setOpen={setOpen} toggleBurger={toggleBurger} />
    </>
  );
};

export default Header;
