import React from "react";
import "Card.scss";
import walker from "../src/img/walker.jpg";
import dog from "../src/img/dog.jpg";

const sampleWalker = {
  name: "Tyna Kpińska",
  photo: walker,
  description:
    "Curabitur congue tempus urna in condimentum. Quisque vel turpis non ligula fermentum suscipit vitae nec velit. Nunc ut massa et eros vulputate tincidunt sed ut purus. Vivamus vel elit velit. ",
};

const sampleDog = {
  name: "Burek",
  photo: dog,
  description:
    "Ut maximus velit fermentum quam feugiat, vitae luctus sapien congue. Nam sed metus nisi. Praesent ut sem sit amet tellus scelerisque ullamcorper eget vitae justo. Praesent fringilla sem est, vel tincidunt est maximus vel. ",
};

const Card = ({ type }) => {
  const { name, photo, description } = type == "dogs" ? sampleDog : sampleWalker;
  console.log(type)
  return (
    <div className="card">
      <h2 className="card__title">{name}</h2>
      <img className="card__image" src={photo} alt="" />

      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
