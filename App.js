import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Burger from "./Components/Burger";
import Content from "./Components/Content";

const App = () => {
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
      <Header />
      <Nav open={open} setOpen={setOpen} />
      <Burger handleClick={handleClick} />
    </>
  );
};

export default App;
