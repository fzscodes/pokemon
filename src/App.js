import React from "react";
import Main from "./Components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import PokemonDetails from "./Components/PokemonDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/pokemonDetails">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
