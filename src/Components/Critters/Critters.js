import React from 'react';
import './Critters.css';
import { Icon } from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Critters = ({ critters, type }) => {
  const critterIcons = critters.map( critter => {
    return (
      <NavLink className="critter-icon-nav" key={critter.id} to={`${type}/${critter.id}`} >
        <Icon 
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
  type: PropTypes.string
}