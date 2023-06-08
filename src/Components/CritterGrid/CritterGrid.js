import React, { useEffect, useState } from "react";
import "./CritterGrid.css";
import { Form } from "../Form/Form";
import { fetchCritterByType } from "../../APICalls/APICalls";
import { Critters } from "../Critters/Critters";
import { cleanCritterData } from "../../APICalls/utilities";

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
        setBugs(cleanCritterData(bugsData));
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMsg("Server error.");
        } 
        else {
          setErrorMsg("Unknown error.");
        }
      });
  }, []);

  useEffect(() => {
    fetchCritterByType("fish")
      .then((fishData) => {
        setFish(cleanCritterData(fishData));
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMsg("Server error.");
        } 
        else {
          setErrorMsg("Unknown error.");
        }
      });
  }, []);

  useEffect(() => {
    fetchCritterByType("sea")
      .then((seaData) => {
        setSeaCreatures(cleanCritterData(seaData));
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMsg("Server error.");
        } 
        else {
          setErrorMsg("Unknown error.");
        }
      });
  }, []);
  
  return (
    <div className="critter-grid">
      <Form setShowBugs={setShowBugs} setShowFish={setShowFish} 
      setShowSeaCreatures={setShowSeaCreatures} setShowMissing={setShowMissing} setSort={setSort} />
      { showBugs && <Critters sort={sort} type="Bugs" showMissing={showMissing} critters={bugs} />}
      { showFish && <Critters sort={sort} type="Fish" showMissing={showMissing} critters={fish}/>}
      { showSeaCreatures && <Critters sort={sort} type="Sea Creatures" showMissing={showMissing} critters={sea}/>}
    </div>
  )
}