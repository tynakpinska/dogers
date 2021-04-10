import React from "react";
import "Content.scss";
import Home from "../Routes/Home";
import Owner from "../Routes/Owner";
import Walker from "../Routes/Walker";
import WalkersList from "../Routes/WalkersList";
import DogsList from "../Routes/DogsList";
import WalkerForm from "../Routes/WalkerForm";
import OwnerForm from "../Routes/OwnerForm";

const Content = ({ open, content }) => {
  return (
    <div className={open ? "content open" : "content"}>
      {content === "owner" ? (
        <Owner />
      ) : content === "walker" ? (
        <Walker />
      ) : content === "walkers-list" ? (
        <WalkersList />
      ) : content === "dogs-list" ? (
        <DogsList />
      ) : content === "walker-form" ? (
        <WalkerForm />
      ) : content === "owner-form" ? (
        <OwnerForm />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Content;
