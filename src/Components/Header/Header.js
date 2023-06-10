import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../Assets/Untitled_Artwork.png";

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="home">
        <img
          className="logo"
          src={logoImage}
          alt={"Critter Companion home button and logo"}
        />
      </NavLink>
      <div className="tag-wrapper">
        <h2 className="tag-line">
          Capture Every Critter: Your Companion in Animal Crossing!
        </h2>
      </div>
    </header>
  );
};
