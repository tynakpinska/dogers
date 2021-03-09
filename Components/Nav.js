import React from "react";
import "./Nav.scss";

const Nav = ({ open, setOpen }) => {

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };
  
  return (
    <>
      {open ? (
        <ul className="menu">
          <li>Home</li>
          <li>Log In</li>
          <li>Register</li>
        </ul>
      ) : null}

      <div className="burgerIcon" onClick={handleClick}>
        <div className="burgerPart part1"></div>
        <div className="burgerPart part2"></div>
        <div className="burgerPart part3"></div>
      </div>
    </>
  );
};

export default Nav;
