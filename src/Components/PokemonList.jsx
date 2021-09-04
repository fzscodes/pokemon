import React, { useState } from "react";
import axios from "axios";
import { fade, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchAppBar from "./Header";
// import Pagination from "./Pagination";
import Pagination from "@material-ui/lab/Pagination";
import lime from "@material-ui/core/colors/lime";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

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
  img: {
    paddingTop: "5%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 100,
    paddingBottom: "5%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    paddingTop: "5%",
    color: "darkmagenta",
  },
  pokemonInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
  },
  height_width: {
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    height: 350,
    backgroundColor: "whitesmoke",
  },
  abilities: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  section2: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const PokemonList = (props) => {
  let [page, setPage] = useState(1);
  const classes = useStyles();
  let { pokemonData, goToNextPage, goToPreviousPage } = props;
  console.log("pokemonData:");
  console.log(pokemonData);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [sortingParameter, setSortingParameter] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleChange = (e, value) => {
    console.log(value);
    if (value > page) {
      setPage(value);
      goToNextPage();
    }
    if (value < page) {
      setPage(value);
      goToPreviousPage();
    }
  };
  const handleDropdownChange = (event) => {
    setSortingParameter(event.target.value);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const handleOpenDropdown = () => {
    setOpenDropdown(true);
  };

  if (searchKeyWord) {
    pokemonData = pokemonData.filter((item) => {

      let searchText = searchKeyWord.toLowerCase();
      
      return item.name.toLowerCase().startsWith(searchText)
        || item.abilities.filter(a =>
        a.ability.name.toLowerCase().startsWith(searchText)).length > 0;      
    });
  }
  // if (searchKeyWord) {
  //   pokemonData = pokemonData.filter((item) => {
  //     return item.abilities
  //       .map((x) => {
  //         return x.ability.name;
  //       })
  //       .toLowerCase()
  //       .startsWith(searchKeyWord.toLowerCase());
  //   });
  // }

  pokemonData = pokemonData.sort(function (a, b) {
    if (sortingParameter === 2) // 2 is height , 3 is weight
    {
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
      <SearchAppBar
        searchKeyWord={searchKeyWord}
        setSearchKeyWord={setSearchKeyWord}
      />
      <div className={classes.root}>
        <div className={classes.section2}>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="open-select-label">Sort By</InputLabel>
              <Select
                labelId="open-select-label"
                id="open-select"
                open={openDropdown}
                onClose={handleCloseDropdown}
                onOpen={handleOpenDropdown}
                value={sortingParameter}
                onChange={handleDropdownChange}
              >
                <MenuItem value={1}>Name</MenuItem>
                <MenuItem value={2}>Height</MenuItem>
                <MenuItem value={3}>Weight</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.pagination}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChange}
            />
          </div>
        </div>
        <Grid
          container
          spacing={10}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {pokemonData.map((item) => (
            <Grid item md={3} key={pokemonData.indexOf(item)}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  alt="Pokemon images"
                  image={item.sprites.other.dream_world.front_default}
                  title="Pokemon images"
                />
                <CardHeader
                  titleTypographyProps={{ variant: "h4" }}
                  title={item.name.toUpperCase()}
                  className={classes.name}
                />
                <div className={classes.cardContent}>
                  <CardContent>
                    <div className={classes.height_width}>
                      <div className={classes.pokemonInfo}>
                        <Typography variant="h6">Height: </Typography>
                        <Typography
                          style={{ marginLeft: 10 }}
                          color="textSecondary"
                        >
                          {item.height}
                        </Typography>
                      </div>
                      <div className={classes.pokemonInfo}>
                        <Typography variant="h6">Weight:</Typography>
                        <Typography
                          style={{ marginLeft: 10 }}
                          color="textSecondary"
                        >
                          {item.weight}
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.pokemonInfo}>
                      <Typography variant="h6">Abilities:</Typography>
                      {item.abilities.map((i, index) => {
                        return (
                          <Typography
                            className={classes.abilities}
                            style={{ marginLeft: 10 }}
                            color="textSecondary"
                            variant="body"
                          >
                            {i.ability.name},
                          </Typography>
                        );
                      })}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className={classes.pagination}>
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default PokemonList;
