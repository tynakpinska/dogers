import React from "react";
import "Content.scss";
import Home from "../Routes/Home";
import Owner from "../Routes/Owner";
import Walker from "../Routes/Walker";

const Content = ({ open, content }) => {
  return (
    <div className={open ? "content open" : "content"}>
      {content === "owner" ? (
        <Owner />
      ) : content === "walker" ? (
        <Walker />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Content;
