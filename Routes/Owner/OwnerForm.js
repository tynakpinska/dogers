import React from "react";
import "./OwnerForm.scss";

const OwnerForm = ({ open }) => {
  const readFile = file => {
    const image = document.querySelector(".owner-form__picture");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      image.src = reader.result;
    });
  };

  const handleChange = e => {
    readFile(e.target.files[0]);
  };

  const handleDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log("drop");
    const dt = e.dataTransfer;
    const files = dt.files;
    readFile(files[0]);
  };

  const handleDragEnter = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className={open ? "owner-form open" : "owner-form"}>
      <h2 className="owner-form__header">Publish an offer</h2>
      <form className="owner-form__form">
        <label className="owner-form__label" htmlFor="name">
          Dog's name:{" "}
        </label>
        <input className="owner-form__input" type="text" name="name" required />

        <label className="owner-form__label" htmlFor="picture">
          Add picture:{" "}
        </label>
        <img
          className="owner-form__picture"
          src=""
          alt=""
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
        <input
          className="owner-form__input"
          type="file"
          name="picture"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />

        <label className="owner-form__label" htmlFor="race">
          Dog's race:{" "}
        </label>
        <input className="owner-form__input" type="text" name="race" />
        <label className="owner-form__label" htmlFor="age">
          Dog's age:{" "}
        </label>
        <input className="owner-form__input" type="number" name="age" />
        <label className="owner-form__label" htmlFor="localization">
          Localization:{" "}
        </label>
        <input className="owner-form__input" type="text" name="localization" />
        <p className="owner-form__label">Services needed: </p>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="walk"
            value="walk"
          />
          <label className="owner-form__label--checkbox" htmlFor="walk">
            walk
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="playing"
            value="playing"
          />{" "}
          <label className="owner-form__label--checkbox" htmlFor="playing">
            playing
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="training"
            value="training"
          />
          <label className="owner-form__label--checkbox" htmlFor="training">
            training
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="feeding"
            value="feeding"
          />
          <label className="owner-form__label--checkbox" htmlFor="feeding">
            feeding
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="washing"
            value="washing"
          />{" "}
          <label className="owner-form__label--checkbox" htmlFor="washing">
            washing
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="combing"
            value="combing"
          />
          <label className="owner-form__label--checkbox" htmlFor="combing">
            combing
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="shearing"
            value="shearing"
          />
          <label className="owner-form__label--checkbox" htmlFor="shearing">
            shearing
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="declawing"
            value="declawing"
          />{" "}
          <label className="owner-form__label--checkbox" htmlFor="declawing">
            declawing
          </label>
        </div>
        <label className="owner-form__label" htmlFor="name">
          Your name:{" "}
        </label>
        <input className="owner-form__input" type="text" name="name" required />
        <input
          className="owner-form__input--button"
          type="submit"
          value="Publish"
        />
      </form>
    </div>
  );
};

export default OwnerForm;
