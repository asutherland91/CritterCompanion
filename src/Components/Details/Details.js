import React, { useEffect, useState } from "react";
import "./Details.css";
import { fetchSpecificCritter } from "../../APICalls/APICalls";
import { useParams, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { cleanCritterDetailsData } from "../../APICalls/utilities";

export const Details = () => {
  const { type, id } = useParams();
  const [critter, setCritterData] = useState();
  const [error, setError] = useState("");


  useEffect(() => {
    fetchSpecificCritter(type, id)
      .then((critterData) => {
        setCritterData(cleanCritterDetailsData(critterData));
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError("Server error.");
        } 
        else {
          setError("Unknown error.");
        }
      });
  }, []);
 if(error) {
  return(
    <Redirect to="/error" />
  )}
  else if(critter) {
    return (
      <div id={critter.id} className="details-wrapper">
        <h2 className="detail-name">{critter["file-name"]}</h2>
        <div className="detail-image-wrapper">
          <img className="detail-image" src={critter["image_uri"]} alt={critter["file-name"]}/>
          <div className="details">
            <p>Location: {critter.availability.location}! </p>
            <p>Price: {critter.price} Bells! </p>
            <p>Rarity: {critter.availability.rarity}! </p>
            <p>Months available: {critter["month-available"]}! </p>
          </div>
        </div>
        <h3 className="catch-phrase">{critter["catch-phrase"]}</h3>
        
      </div>
    );
  }
  else {
    return (
      <h1>Loading, yes</h1>
    )
  }
}