import React from 'react';
import './SeaCreatures.css';
import { Icon } from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const SeaCreatures = ({ critters }) => {
  const seaCreatureIcons = critters.map( critter => {
    return (
      <NavLink className="critter-icon-nav" key={critter.id} to={`sea/{critter.id}`} >
        <Icon 
          id={critter.id}
          image={critter.icon_uri}
          name={critter["file-name"]}
        />
      </NavLink>
    )
  })
  return (
    <div className="sea-creature-grid">
      <h2>Sea Creatures</h2>
      {seaCreatureIcons}
    </div>
  )
}

SeaCreatures.propTypes = {
  critters: PropTypes.array
}