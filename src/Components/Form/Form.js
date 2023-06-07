import React, { useState } from "react";
import "./Form.css";
import PropTypes from 'prop-types';

export const Form = ({setShowBugs, setShowFish, setShowSeaCreatures, setShowMissing, setSort}) => {

  return(
    <form>
      <label>
        Show Missing Critters
        <input type="checkbox" defaultChecked={false} name="missing-critters" onChange={(event) => {
          setShowMissing(event.target.checked);
        }} />
      </label>
      <label>
        Show Bugs
        <input type="checkbox" defaultChecked={true} name="bugs" onChange={(event) => {
          setShowBugs(event.target.checked);
        }} />
      </label>
      <label>
        Show Fish
        <input type="checkbox" defaultChecked={true} name="fish" onChange={(event) => {
          setShowFish(event.target.checked);
        }} />
      </label>
      <label>
        Show Sea Creatures
        <input type="checkbox" defaultChecked={true} name="sea-creatures" onChange={(event) => {
          setShowSeaCreatures(event.target.checked);
        }} />
      </label>
      <label>
        Sort by
        <select name="sort-by" onChange={(event) => {
          setSort(event.target.value);
        }} >
          <option value="Default">Default</option>
          <option value="Name">Name</option>
          <option value="Price">Price</option>
        </select>
      </label>
    </form>
  )
};