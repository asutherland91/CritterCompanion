import React, { useState, useEffect } from "react";
import "./Critters.css";
import { Icon } from "../Icon/Icon";
import PropTypes from "prop-types";

export const Critters = ({ critters, type, sort, showMissing }) => {
  const [collected, setCollected] = useState(
    JSON.parse(localStorage.getItem(`Collected-${type}`)) || []
  );
  useEffect(() => {
    localStorage.setItem(`Collected-${type}`, JSON.stringify(collected));
  }, [collected, type]);
  const critterIcons = critters
    .filter((critter) => {
      if (showMissing) {
        return !collected.includes(critter.number);
      } else {
        return true;
      }
    })
    .toSorted((a, b) => {
      if (sort === "Default") {
        return a.number - b.number;
      } else if (sort === "Name") {
        return a["name"] < b["name"] ? -1 : 1;
      } else if (sort === "Price") {
        return b.sell_nook - a.sell_nook;
      } else {
        return [];
      }
    })
    .map((critter) => {
      return (
        <Icon
          key={critter.number}
          collected={collected}
          type={type}
          setCollected={setCollected}
          id={critter.number}
          image={critter.image_url}
          name={critter["name"]}
          selected={collected.includes(critter.number)}
        />
      );
    });

  return (
    <div className="critter-component-grid">
      <h2 className="critter-title">{type}</h2>
      <div className="critter-wrapper">{critterIcons}</div>
    </div>
  );
};

Critters.propTypes = {
  critters: PropTypes.array,
  type: PropTypes.string,
  sort: PropTypes.string,
  showMissing: PropTypes.bool,
};
