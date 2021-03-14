import React from "react";
import "./Burger.scss";

const Burger = ({ handleClick }) => {
  return (
    <div className="burgerIcon" onClick={handleClick}>
      <div className="burgerPart" id="part1"></div>
      <div className="burgerPart" id="part2"></div>
      <div className="burgerPart" id="part3"></div>
    </div>
  );
};

export default Burger;
