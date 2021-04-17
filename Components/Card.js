import React, { useState, useEffect } from "react";
import "Card.scss";
import walker from "../src/img/walker.jpg";
import dog from "../src/img/dog.jpg";

const sampleWalker = {
  name: "Tyna Kpińska",
  photo: walker,
};

const sampleDog = {
  name: "Burek",
  photo: dog,
};

const Card = ({ type }) => {
  const [photo, setPhoto] = useState(
    type == "dogs" ? sampleDog.photo : sampleWalker.photo
  );
  const [description, setDescription] = useState(
    "Ut maximus velit fermentum quam feugiat, vitae luctus sapien congue. Nam sed metus nisi. Praesent ut sem sit amet tellus scelerisque ullamcorper eget vitae justo. Praesent fringilla sem est, vel tincidunt est maximus vel. "
  );
  if (type == "dogs") {
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(res => {
          setPhoto(res.message);
        });
    }, []);
  }
  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=all-meat&sentences=1")
      .then(res => res.json())
      .then(res => {
        setDescription(res[0]);
      });
  }, []);
  const { name } = type == "dogs" ? sampleDog : sampleWalker;

  return (
    <div className="card">
      <h2 className="card__title">{name}</h2>
      <img className="card__image" src={photo} alt="" />

      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
