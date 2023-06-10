import React from "react";
import "./Form.css";
import PropTypes from "prop-types";

export const Form = ({
  setShowBugs,
  setShowFish,
  setShowSeaCreatures,
  setShowMissing,
  setSort,
}) => {
  return (
    <form className="form">
      <div className="form-column">
        <div className="form-checkbox-label">
          <label className="form-label">
            Show Missing Critters
            <input
              type="checkbox"
              className="form-checkbox show-missing"
              defaultChecked={false}
              name="missing-critters"
              onChange={(event) => {
                setShowMissing(event.target.checked);
              }}
            />
          </label>
        </div>
        <div className="form-checkbox-label">
          <label className="form-label">
            Show Bugs
            <input
              type="checkbox"
              className="form-checkbox show-bugs"
              defaultChecked={true}
              name="bugs"
              onChange={(event) => {
                setShowBugs(event.target.checked);
              }}
            />
          </label>
        </div>
        <div className="form-checkbox-label">
          <label className="form-label">
            Show Fish
            <input
              type="checkbox"
              className="form-checkbox show-fish"
              defaultChecked={true}
              name="fish"
              onChange={(event) => {
                setShowFish(event.target.checked);
              }}
            />
          </label>
        </div>
        <div className="form-checkbox-label">
          <label className="form-label">
            Show Sea Creatures
            <input
              type="checkbox"
              className="form-checkbox show-sea"
              defaultChecked={true}
              name="sea-creatures"
              onChange={(event) => {
                setShowSeaCreatures(event.target.checked);
              }}
            />
          </label>
        </div>
      </div>
      <div className="form-column">
        <div className="form-select-label">
          <label className="form-label">
            Sort by
            <select
              name="sort-by"
              className="form-sort"
              onChange={(event) => {
                setSort(event.target.value);
              }}
            >
              <option value="Default">Default</option>
              <option value="Name">Name</option>
              <option value="Price">Price</option>
            </select>
          </label>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  setShowBugs: PropTypes.func,
  setShowFish: PropTypes.func,
  setShowSeaCreatures: PropTypes.func,
  setShowMissing: PropTypes.func,
  setSort: PropTypes.func,
};
