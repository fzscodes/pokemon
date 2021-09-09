import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Pagination from "@material-ui/lab/Pagination";
import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import Pokemons from "../Pokemons/Pokemons";
import axios from "axios";
import {useStyles} from './Main.Styles';


const Main = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const searchKeyWordLocalStore = localStorage.getItem("searchKeyWord");
  const [searchKeyWord, setSearchKeyWord] = useState(
    searchKeyWordLocalStore ? searchKeyWordLocalStore : ""
  );
  const sortParamLocalStore = Number(localStorage.getItem("sortingParameter"));
  const [sortingParameter, setSortingParameter] = useState(
    Number.isInteger(sortParamLocalStore) ? sortParamLocalStore : 1
  );
  const numberOfItemsPerPageLocalStore = Number(
    localStorage.getItem("numberOfItemsPerPage")
  );
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(
    Number.isInteger(numberOfItemsPerPageLocalStore)
      ? numberOfItemsPerPageLocalStore
      : 10
  );
  const classes = useStyles();
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  let initialUrl =
    baseUrl + "?limit=" + `${numberOfItemsPerPage}` + "&offset=0";

  let [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState(initialUrl);

  useEffect(() => {
    fetchPokemons();
  }, [currentUrl]);

  useEffect(() => {
    localStorage.setItem("sortingParameter", sortingParameter);
  }, [sortingParameter]);

  useEffect(() => {
    localStorage.setItem("numberOfItemsPerPage", numberOfItemsPerPage);
  }, [numberOfItemsPerPage]);

  useEffect(() => {
    localStorage.setItem("searchKeyWord", searchKeyWord);
  }, [searchKeyWord]);

  async function fetchPokemons() {
    const response = await axios.get(currentUrl);
    const result = response.data.results;
    setTotalPages(Math.floor(response.data.count / numberOfItemsPerPage));
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

  const handlePagination = (e, value) => {
    if (value === currentPage + 1) {
      setCurrentPage(value);
      goToNextPage();
    } else if (value === currentPage - 1) {
      setCurrentPage(value);
      goToPreviousPage();
    } else {
      setCurrentPage(value);
      let url =
        baseUrl +
        "?limit=" +
        `${numberOfItemsPerPage}` +
        "&offset=" +
        `${numberOfItemsPerPage * (value - 1)}`;
      setCurrentUrl(url);
    }
  };
  const handlePageItemsSorting = (event) => {
    setSortingParameter(event.target.value);
  };

  const handleNumberOfItemsDisplayed = (event) => {
    event.preventDefault();
    if (currentPage !== 1) {
      // if number of items is changed on any page other than first page, then offset=0 and navigate back to page 1
      setCurrentPage(1);
    }
    setNumberOfItemsPerPage(event.target.value);
    let url =
      baseUrl +
      "?limit=" +
      `${event.target.value}` +
      "&offset=" +
      `${event.target.value * (currentPage - 1)}`;
    setCurrentUrl(url);
  };

  if (searchKeyWord) {
    pokemonData = pokemonData.filter((item) => {
      let searchText = searchKeyWord.toLowerCase();
      return (
        item.name.toLowerCase().startsWith(searchText) ||
        item.abilities.filter((a) =>
          a.ability.name.toLowerCase().startsWith(searchText)
        ).length > 0
      );
    });
  }

  pokemonData = pokemonData.sort(function (a, b) {
    if (sortingParameter === 2) {
      // 2 is height , 3 is weight
      return a.height - b.height;
    } else if (sortingParameter === 3) {
      return a.weight - b.weight;
    } else {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  });

  return (
    <>
      <Header
        searchKeyWord={searchKeyWord}
        setSearchKeyWord={setSearchKeyWord}
      />
      <div className={classes.root}>
        <div className={classes.section2}>
          <div className={classes.formControlDiv}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="open-select-label">Sort By</InputLabel>
                <Select
                  labelId="open-select-label"
                  id="open-select"
                  value={sortingParameter}
                  onChange={handlePageItemsSorting}
                >
                  <MenuItem value={1}>Name</MenuItem>
                  <MenuItem value={2}>Height</MenuItem>
                  <MenuItem value={3}>Weight</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="open-select-label2">No of Items</InputLabel>
                <Select
                  labelId="open-select-label2"
                  id="open-select2"
                  value={numberOfItemsPerPage}
                  onChange={handleNumberOfItemsDisplayed}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={classes.pagination}>
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              page={currentPage}
              onChange={handlePagination}
            />
          </div>
        </div>
        <Pokemons pokemonData={pokemonData} />
        <div className={classes.pagination}>
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={handlePagination}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
