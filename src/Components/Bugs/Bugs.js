import React from 'react';
import './Bugs.css';
import { Icon } from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Bugs = ({ critters }) => {
  console.log(critters);
  const bugIcons = critters.map( critter => {
    return (
      <NavLink className="critter-icon-nav" key={critter.id} to={`bug/{critter.id}`} >
        <Icon 
          id={critter.id}
          image={critter.icon_uri}
          name={critter["file-name"]}
        />
      </NavLink>
    )
  })
  return (
    <div className="bug-wrapper">
      <h2>Bugs</h2>
      <div className="bug-grid">
        {bugIcons}
      </div>
    </div>
  )
}

Bugs.propTypes = {
  critters: PropTypes.array
}