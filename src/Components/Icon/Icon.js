import React, { useState } from "react";
import "./Icon.css";
import PropTypes from 'prop-types'

export const Icon = ({ id, image, name }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return(
    <div id={id} className={`icon ${isClicked ? "fade" : ""}`}>
<h2 className="name">{name}</h2>
      <div className="image-wrapper">
        <img className="image" src={image} alt={name}/>
      </div>
      <button className="collected" onClick={handleClick}>
        Got it!
      </button>
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number
}