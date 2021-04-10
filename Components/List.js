import React from "react";
import "List.scss";
import Card from "./Card";

const List = ({ type }) => {
  return (
    <div className="cards-list">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default List;
