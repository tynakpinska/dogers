import React, { useState } from "react";
import "./Header.scss";
import Burger from "../Components/Burger";
import Nav from "../Components/Nav";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);

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

  return (
    <>
      <header className="header">
        <h1>Dogers</h1>
        <Burger handleClick={handleClick} />
      </header>
      <Nav open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
