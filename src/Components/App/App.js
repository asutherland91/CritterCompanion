import React from "react";
import { CritterGrid } from "../CritterGrid/CritterGrid";
import { Details } from "../Details/Details";
import { Header } from "../Header/Header";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <main className="critter-main">
          <Header />
          <CritterGrid />
        </main>
      </Route>
      <Route exact path="/:type/:id">
        <main className="details-main">
          <Header />
          <Details />
        </main>
      </Route>
      <Route exact path="/error">
        <ErrorPage />
      </Route>
      <Route path="*">
        <Redirect to="/error" />
      </Route>
    </Switch>
  );
};

export default App;
