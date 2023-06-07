import React, { useState } from "react";
import "./Icon.css";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Icon = ({ id, image, name, setCollected, type, collected }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if(!isClicked) {
      setCollected([...collected, id])
    }
    else {
      setCollected(collected.filter(item => item !== id))
    }
  };

  let critterName = name.replaceAll("_", ' ')

  return(
    <div id={id} className={`icon ${isClicked ? "fade" : ""}`}>
      <h2 className="name">{critterName}</h2>
      <NavLink className="critter-icon-nav" key={id} to={`${type}/${id}`} >
        <div className="image-wrapper">
          <img className="image" src={image} alt={name}/>
        </div>
      </NavLink>
      <button className="collected" onClick={handleClick}>
        {!isClicked ? "Got It!" : "Don't Got It!"}
      </button>
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  setCollected: PropTypes.func,
  type: PropTypes.string,
  collected: PropTypes.array,
}