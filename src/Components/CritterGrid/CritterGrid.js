import React, { useEffect, useState } from "react";
import "./CritterGrid.css";
import { Bugs } from "../Bugs/Bugs";
import { Fish } from "../Fish/Fish";
import { SeaCreatures } from "../SeaCreatures/SeaCreatures";
import { fetchCritterByType } from "../../APICalls/APICalls";

export const CritterGrid = () => {
  const [bugs, setBugs] = useState([]);
  const [fish, setFish] = useState([]);
  const [sea, setSeaCreatures] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchCritterByType("bugs")
      .then((bugsData) => {
        setBugs(bugsData);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMsg("Server error.");
        } else {
          setErrorMsg("Unknown error.");
        }
      });
  }, []);

  useEffect(() => {
    fetchCritterByType("fish")
      .then((fishData) => {
        setFish(fishData);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMsg("Server error.");
        } else {
          setErrorMsg("Unknown error.");
        }
      });
  }, []);

  useEffect(() => {
    fetchCritterByType("sea")
      .then((seaData) => {
        setSeaCreatures(seaData);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMsg("Server error.");
        } else {
          setErrorMsg("Unknown error.");
        }
      });
  }, []);


  return (
    <div className="critter-grid">
      <Bugs critters={bugs} />
      <Fish critters={fish}/>
      <SeaCreatures critters={sea}/>
    </div>
  )
}