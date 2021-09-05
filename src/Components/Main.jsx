import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./Header";
import Pagination from "@material-ui/lab/Pagination";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Pokemons from "./Pokemons";
import axios from "axios";

// @ts-ignore
const useStyles = makeStyles((theme) => ({
  pagination: {
    "& > *": {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),

      display: "flex",
      justifyContent: "center",
      alignItem: "center",
    },
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
    backgroundColor: "lavender",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  section2: {
    display: "flex",
    justifyContent: "space-between",
  },
  formControlDiv: {
    display: "flex",
    flexDirection: "flex-start",
  },
}));

const Main = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [sortingParameter, setSortingParameter] = useState(1);
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(10);
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

  async function fetchPokemons() {
    console.log("fetching: " + numberOfItemsPerPage);
    console.log(currentUrl);
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
    console.log("Page Clicked=" + value);
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

  // window.location.reload(true);
  return (
    <>
      <SearchBar
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
