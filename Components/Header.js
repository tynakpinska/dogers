import React, { useState } from "react";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {open ? null : <h1>Dogers</h1>}
      <Nav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
