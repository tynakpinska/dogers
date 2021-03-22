import React from "react";
import "./Burger.scss";

const Burger = ({ handleClick }) => {
  return (
    <div className="burgerIcon" onClick={handleClick}>
      <div className="burgerIcon__part" id="part1"></div>
      <div className="burgerIcon__part" id="part2"></div>
      <div className="burgerIcon__part" id="part3"></div>
    </div>
  );
};

export default Burger;
