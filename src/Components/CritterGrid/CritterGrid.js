import React, { useEffect, useState } from "react";
import "./CritterGrid.css";
import { Form } from "../Form/Form";
import { Bugs } from "../Bugs/Bugs";
import { Fish } from "../Fish/Fish";
import { SeaCreatures } from "../SeaCreatures/SeaCreatures";
import { fetchCritterByType } from "../../APICalls/APICalls";

export const CritterGrid = () => {
  const [bugs, setBugs] = useState([]);
  const [fish, setFish] = useState([]);
  const [sea, setSeaCreatures] = useState([]);
  const [showMissing, setShowMissing] = useState(false);
  const [showFish, setShowFish] = useState(true);
  const [showBugs, setShowBugs] = useState(true);
  const [showSeaCreatures, setShowSeaCreatures] = useState(true);
  const [sort, setSort] = useState("Default");
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
      <Form setShowBugs={setShowBugs} setShowFish={setShowFish} 
      setShowSeaCreatures={setShowSeaCreatures} setShowMissing={setShowMissing} setSort={setSort} />
      { showBugs && <Bugs critters={bugs} />}
      { showFish && <Fish critters={fish}/>}
      { showSeaCreatures && <SeaCreatures critters={sea}/>}
    </div>
  )
}