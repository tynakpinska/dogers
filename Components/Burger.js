import React from "react";
import "./Burger.scss";

const Burger = ({ handleClick }) => {
  return (
    <div className="burgerIcon" onClick={handleClick}>
      <div className="burgerIcon__part burgerIcon__part--first"></div>
      <div className="burgerIcon__part burgerIcon__part--middle"></div>
      <div className="burgerIcon__part burgerIcon__part--last"></div>
    </div>
  );
};

export default Burger;
