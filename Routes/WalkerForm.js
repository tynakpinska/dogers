import React from "react";
import "./WalkerForm.scss";

const WalkerForm = ({ open }) => {
  return (
    <div className={open ? "walker-form open" : "walker-form"}>
      <h2 className="walker-form__header">Publish an offer</h2>
      <form className="walker-form__form">
        <label className="walker-form__label" htmlFor="name">
          Title:{" "}
        </label>
        <input
          className="walker-form__input"
          type="text"
          name="name"
          required
        />

        <label className="walker-form__label" htmlFor="picture">
          Add picture:{" "}
        </label>
        <img className="walker-form__picture" src="" alt="" />
        <input
          className="walker-form__input"
          type="file"
          name="picture"
          accept="image/png, image/jpeg"
        />

        <label className="walker-form__label" htmlFor="price">
          Price for an hour:{" "}
        </label>
        <input className="walker-form__input" type="number" name="price" />
        <label className="walker-form__label" htmlFor="localization">
          Localization:{" "}
        </label>
        <input className="walker-form__input" type="text" name="localization" />
        <p className="walker-form__label">Services offered: </p>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="walk"
            value="walk"
          />
          <label className="walker-form__label--checkbox" htmlFor="walk">
            walk
          </label>
        </div>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="playing"
            value="playing"
          />{" "}
          <label className="walker-form__label--checkbox" htmlFor="playing">
            playing
          </label>
        </div>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="training"
            value="training"
          />
          <label className="walker-form__label--checkbox" htmlFor="training">
            training
          </label>
        </div>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="feeding"
            value="feeding"
          />
          <label className="walker-form__label--checkbox" htmlFor="feeding">
            feeding
          </label>
        </div>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="washing"
            value="washing"
          />{" "}
          <label className="walker-form__label--checkbox" htmlFor="washing">
            washing
          </label>
        </div>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="combing"
            value="combing"
          />
          <label className="walker-form__label--checkbox" htmlFor="combing">
            combing
          </label>
        </div>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="shearing"
            value="shearing"
          />
          <label className="walker-form__label--checkbox" htmlFor="shearing">
            shearing
          </label>
        </div>
        <div>
          <input
            className="walker-form__input"
            type="checkbox"
            name="declawing"
            value="declawing"
          />{" "}
          <label className="walker-form__label--checkbox" htmlFor="declawing">
            declawing
          </label>
        </div>
        <label className="walker-form__label" htmlFor="name">
          Your name:{" "}
        </label>
        <input
          className="walker-form__input"
          type="text"
          name="name"
          required
        />
        <input
          className="walker-form__input--button"
          type="submit"
          value="Publish"
        />
      </form>
    </div>
  );
};

export default WalkerForm;
