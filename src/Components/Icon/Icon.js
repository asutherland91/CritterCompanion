import React from "react";
import "./Icon.css";
import PropTypes from 'prop-types'

export const Icon = ({ id, image, name }) => {
  return(
    <div id={id} className="icon" >
      <div className="image-wrapper">
        <img className="image" src={image} alt={name}/>
      </div>
      <h2 className="name">{name}</h2>
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number
}