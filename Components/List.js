import React from "react";
import "List.scss";
import Card from "./Card";

const List = ({ type }) => {
  return (
    <div className="cards-list">
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
    </div>
  );
};

export default List;
