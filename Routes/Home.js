import React from "react";
import "Home.scss";

const Home = ({ open }) => {
  return (
    <div className={open ? "hero open" : "hero"}>
      <p className="hero-text">
        Explore our community of dog walkers or find a dog to pet
      </p>
      <button className="hero-button_first">I have a dog</button>
      <button className="hero-button">I'm a walker</button>
    </div>
  );
};

export default Home;
