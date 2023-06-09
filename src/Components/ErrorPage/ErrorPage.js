import React from "react";
import "./ErrorPage.css";
import { NavLink } from "react-router-dom";

export const ErrorPage= () => {
  return (
    <section className="error-page">
      <div className="error-wrapper">
        <h2 className = "error-message">An error has occured while we were trying to retrive your critters. Please try again, yes.</h2>
        <NavLink to="/" className="go-home">Yes, yes. Try Again!</NavLink>
      </div>
    </section>
  );
};