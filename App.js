import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Burger from "./Components/Burger";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);

    document.getElementById("part1").classList.toggle("transformed");
    document.getElementById("part2").classList.toggle("hidden");
    document.getElementById("part3").classList.toggle("transformed");
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
