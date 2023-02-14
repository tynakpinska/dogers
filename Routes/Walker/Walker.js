import React from "react";
import {Link} from "react-router-dom";
import "./Walker.scss";

const Walker = () => {
  return (
    <div className="walker">
      <Link to="/walker-form" className="walker__button">
        Publish an offer
      </Link>
      <Link to="/dogs-list" className="walker__button">
        Find a dog to walk
      </Link>
    </div>
  );
};

export default Walker;
