import React from "react";
import "Card.scss";
import img from "../src/img/walker.jpg";

const sampleWalker = {
  name: "Tyna Kpińska",
  photo: img,
  description:
    "Curabitur congue tempus urna in condimentum. Quisque vel turpis non ligula fermentum suscipit vitae nec velit. Nunc ut massa et eros vulputate tincidunt sed ut purus. Vivamus vel elit velit. ",
};

const Card = () => {
  const { name, photo, description } = sampleWalker;
  return (
    <div className="card">
      <h2 className="card__title">{name}</h2>
      <img className="card__image" src={photo} alt="" />

      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
