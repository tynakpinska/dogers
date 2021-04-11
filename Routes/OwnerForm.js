import React from "react";
import "./OwnerForm.scss";

const OwnerForm = ({ open }) => {
  return (
    <div className={open ? "owner-form open" : "owner-form"}>
      <h2 className="owner-form__header">Publish an offer</h2>
      <form className="owner-form__form">
        <label className="owner-form__label" htmlFor="name">
          Dog's name:{" "}
        </label>
        <input className="owner-form__input" type="text" name="name" required />
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
        <h3>Services needed: </h3>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="walk"
            value="walk"
          />
          <label className="owner-form__label" htmlFor="walk">
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
          <label className="owner-form__label" htmlFor="playing">
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
          <label className="owner-form__label" htmlFor="training">
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
          <label className="owner-form__label" htmlFor="feeding">
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
          <label className="owner-form__label" htmlFor="washing">
            washing
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="combing"
            value="combing"
          />{" "}
          {/* czesanie  */}
          <label className="owner-form__label" htmlFor="combing">
            combing
          </label>
        </div>
        <div>
          <input
            className="owner-form__input"
            type="checkbox"
            name="shearing"
            value="shearing"
          />{" "}
          {/* strzyżenie  */}{" "}
          <label className="owner-form__label" htmlFor="shearing">
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
          <label className="owner-form__label" htmlFor="declawing">
            declawing
          </label>
        </div>
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
