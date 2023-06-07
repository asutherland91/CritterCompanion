import React, { useState } from "react";
import "./Icon.css";
import PropTypes from 'prop-types'

export const Icon = ({ id, image, name, setCollected }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  let critterName = name.replaceAll("_", ' ')

  return(
    <div id={id} className={`icon ${isClicked ? "fade" : ""}`}>
<h2 className="name">{critterName}</h2>
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
  id: PropTypes.number,
  setCollected: PropTypes.func
}