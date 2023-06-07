import React, { useEffect, useState } from "react";
import "./CritterGrid.css";
import { Form } from "../Form/Form";
import { fetchCritterByType } from "../../APICalls/APICalls";
import { Critters } from "../Critters/Critters";

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
        } 
        else {
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
        } 
        else {
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
      { showBugs && <Critters sort={sort} type="Bugs" critters={bugs} />}
      { showFish && <Critters sort={sort} type="Fish" critters={fish}/>}
      { showSeaCreatures && <Critters sort={sort} type="Sea Creatures" critters={sea}/>}
    </div>
  )
}