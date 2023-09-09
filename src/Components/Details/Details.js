import React, { useEffect, useState } from "react";
import "./Details.css";
import { fetchSpecificCritter } from "../../APICalls/APICalls";
import { useParams, Redirect } from "react-router-dom";
import { cleanCritterDetailsData } from "../../APICalls/utilities";

export const Details = () => {
  const { type, id } = useParams();
  const [critter, setCritterData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSpecificCritter(type, id)
      .then((critterData) => {
        setCritterData(critterData);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError("Server error.");
        } else {
          setError("Unknown error.");
        }
      });
  });
  if (error) {
    return <Redirect to="/error" />;
  } else if (critter) {
    return (
      <div id={critter.number} className="details-wrapper">
        <h2 className="detail-name">{critter["name"]}</h2>
        <div className="detail-image-wrapper">
          <img
            className="detail-image"
            src={critter["render_url"]}
            alt={critter["name"]}
          />
          <div className="details">
            <p className="location">
              Location: {critter.location}!{" "}
            </p>
            <p className="price">Sell Price to Nooklings: {critter.nook_sell} Bells! </p>
            <p className="price"> Sell Price to CJ: {critter.nook_sell} Bells! </p>
            {/* <p className="rarity">Rarity: {critter.rarity}! </p> */}
            <p className="month">
              Months found: {critter.north.months}!{" "}
            </p>
            {/* <p className="time">Time found: {critter.north.availability_array[time]}</p> */}
          </div>
        </div>
        <h3 className="catch-phrase">{critter["catchphrases"]}</h3>
      </div>
    );
  } else {
    return <h1>Loading, yes</h1>;
  }
};
