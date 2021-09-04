import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./Components/PokemonList";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const [currentUrl, setCurrentUrl] = useState(initialUrl);

  async function fetchPokemons() {
    console.log("currentUrl");
    console.log(currentUrl);
    const response = await axios.get(currentUrl);
    const result = response.data.results;
    console.log(response);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);   
    fetchPokemonDetails(result);
  }

  async function fetchPokemonDetails(result) {
      let tempArray = [];
    result.forEach(async (pokemon) => {
      const res = await axios.get(`${pokemon.url}`);
      let pokemonDetailsObjects = res.data;
      tempArray = [...tempArray, pokemonDetailsObjects];  
      setPokemonData(tempArray);     
    });    
  }

  const goToNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const goToPreviousPage = () => {
    setCurrentUrl(prevUrl);
  };
  useEffect(() => {
    fetchPokemons();
  }, [currentUrl]);

  return (
    <>
      <PokemonList
        pokemonData={pokemonData}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </>
  );
}

export default App;
