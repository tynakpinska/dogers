import React from "react";
import "Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p className="hero__text">
        Explore our community of dog walkers or find a dog to pet
      </p>
      <Link to="/owner" className="hero__button hero__button--first">
        I have a dog
      </Link>
      <Link to="/walker" className="hero__button hero__button--second">
        I'm a walker
      </Link>
    </>
  );
};

export default Home;
