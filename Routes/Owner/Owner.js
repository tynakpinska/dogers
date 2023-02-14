import React from "react";
import { Link } from "react-router-dom";
import "./Owner.scss";

const Owner = () => {
  return (
    <div className="owner">
      <Link to="/owner-form" className="owner__button">
        Publish an offer
      </Link>
      <Link to="/walkers-list" className="owner__button">
        Browse dog walkers
      </Link>
    </div>
  );
};

export default Owner;
