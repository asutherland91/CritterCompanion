import React, { useState } from 'react';
import './Critters.css';
import { Icon } from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Critters = ({ critters, type, sort }) => {
  const [collected, setCollected] = useState([]);
  const critterIcons = critters.toSorted((a, b) => {
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
      <NavLink className="critter-icon-nav" key={critter.id} to={`${type}/${critter.id}`} >
        <Icon 
          setCollected={setCollected}
          id={critter.id}
          image={critter.icon_uri}
          name={critter["file-name"]}
        />
      </NavLink>
    )
  })
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
}