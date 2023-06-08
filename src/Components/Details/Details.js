import React, { useEffect, useState } from "react";
import "./Details.css";
import { fetchSpecificCritter } from "../../APICalls/APICalls";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'

export const Details = () => {
  const { type, id } = useParams();
  const [critter, setCritterData] = useState();
  const [errorMsg, setErrorMsg] = useState("");


  useEffect(() => {
    fetchSpecificCritter(type, id)
      .then((critterData) => {
        setCritterData(critterData);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMsg("Server error.");
        } 
        else {
          setErrorMsg("Unknown error.");
        }
      });
  }, []);
 
  if(critter) {
    return (
      <div id={critter.id} className="details-wrapper">
        <h2 className="name">{critter["file-name"]}</h2>
        <h3>{critter["catch-phrase"]}</h3>
          <div className="image-wrapper">
            <img className="image" src={critter["image_uri"]} alt={critter["file-name"]}/>
          </div>
          <p>I am found in the {critter.availability.location} </p>
          <p>I am worth {critter.price} bells </p>
          <p>I am found in the {critter.location} </p>
      </div>
    );
  }
  else {
    return (
      <h1>Loading, yes</h1>
    )
  }
  
}