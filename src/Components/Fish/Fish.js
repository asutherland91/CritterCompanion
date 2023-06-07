import React from 'react';
import './Fish.css';
import { Icon }from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Fish = ({ critters }) => {
  const fishIcons = critters.map( critter => {
    return (
      <NavLink className="critter-icon-nav" key={critter.id} to={`fish/${critter.id}`} >
        <Icon 
          id={critter.id}
          image={critter.icon_uri}
          name={critter["file-name"]}
        />
      </NavLink>
    )
  })
  return (
    <div className="fish-grid">
      <h2 className="fish-title">Fish</h2>
      <div className="fish-wrapper">
        {fishIcons}
      </div>
    </div>
  )
}

Fish.propTypes = {
  critters: PropTypes.array
}