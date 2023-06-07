import React, { useState } from 'react';
import './Critters.css';
import { Icon } from '../Icon/Icon';
import PropTypes from 'prop-types'

export const Critters = ({ critters, type, sort, showMissing }) => {
  const [collected, setCollected] = useState([]);
  const critterIcons = critters
  .filter((critter) => {
    if(showMissing) {
      return !collected.includes(critter.id);
    }
    else {
      return true;
    }
  })
  .toSorted((a, b) => {
    if(sort === "Default") {
      return a.id - b.id;
    }
    else if(sort === "Name") {
      return a["file-name"] < b["file-name"] ? -1 : 1;
    }
    else if(sort === "Price") {
      return b.price - a.price;
    }
  })
  .map( critter => {
    return (
        <Icon 
          key={critter.id}
          collected={collected}
          type={type}
          setCollected={setCollected}
          id={critter.id}
          image={critter.icon_uri}
          name={critter["file-name"]}
          selected={collected.includes(critter.id)}
        />
    )
  })
  console.log(collected)
  return (
    <div className="critter-component-grid">
      <h2 className="critter-title">{type}</h2>
      <div className="critter-wrapper">
        {critterIcons}
      </div>
    </div>
  )
}

Critters.propTypes = {
  critters: PropTypes.array,
  type: PropTypes.string,
  sort: PropTypes.string,
  showMissing: PropTypes.bool
}