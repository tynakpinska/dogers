import React from "react";
import "Content.scss";
import Home from "../Routes/Home/Home";
import Owner from "../Routes/Owner/Owner";
import Walker from "../Routes/Walker/Walker";
import WalkersList from "../Routes/Owner/WalkersList";
import DogsList from "../Routes/Walker/DogsList";
import WalkerForm from "../Routes/Walker/WalkerForm";
import OwnerForm from "../Routes/Owner/OwnerForm";

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
