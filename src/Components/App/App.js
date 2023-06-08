import React from "react";
import { CritterGrid } from "../CritterGrid/CritterGrid";
import { Details } from "../Details/Details";
import "./App.css";
import { Route, Switch, Redirect} from "react-router-dom";

const App = () => {

  return (
    <Switch>
      <Route exact path="/">
        <main className="critter-main">
          <CritterGrid />
        </main>
      </Route>
      <Route exact path="/:type/:id">
        <main className="details-main">
          <Details />
        </main>
      </Route>
    </Switch>
   
  );
};

export default App;
