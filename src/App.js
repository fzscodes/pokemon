import React from "react";
import Main from "./Components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import PokemonDetails from "./Components/PokemonDetails";
// import { useMediaQuery } from 'react-responsive'

function App() {
  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  // const isBigScreen = useMediaQuery({ minWidth: 1824 })
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  // const isRetina = useMediaQuery({ minResolution: '2dppx' })
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
