import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ArrowBackIos } from "@material-ui/icons";
import IconButton from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  cardDiv: {
    flexGrow: 1,
    backgroundColor: "lavender",
    padding: "4%",
  },
  backButton: {
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      fontSize: "2em",
      fontWeight: "bold",
      padding: "1%",
    },
  },
  card: {
    // padding: theme.spacing(24),
    // marginTop: "2%",
    marginLeft: "10%",
    marginRight: "10%",
    maxWidth: "100%",
    // minHeight: "70vh",
    backgroundColor: "whitesmoke",
    
  },
  // imageGrid: {
  //   width: "50vh",
  //   height: "50vh",
  //   margin: "auto",
  // },
  // img: {
  //   marginLeft: "30%",
  // // display: "block",
  // paddingTop: "10%",
  // },
  secondaryHeaders: {
    color: "darkmagenta",
    marginRight: "1%",
  },
  pokemonInfoGrid: {
    marginTop: "3%",

  },
  pokemonInfo: {
    display: "flex",
     marginLeft:"30%",
   
    //  justifyContent: "center",
    // alignItems: "center",
    padding: "1%",
   
  },
  pokemonName: {
    color: "darkmagenta",
    fontWeight: "Bold",
    textAlign: "center",
    padding: "2%",
  },
  mainGridContainer:{
    display:"flex",
    justifyContent:"space-between",

  }
}));

const PokemonDetails = () => {
  const history = useHistory();
  const classes = useStyles();
  console.log(history.location);
  const pokemon = history.location.state;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <ArrowBackIos
              className={classes.backButton}
              onClick={() => history.push("/")}
            />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            POKEMONS
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.cardDiv}>
        <Card
          className={classes.card}>
          <Typography gutterBottom variant="h3" className={classes.pokemonName}>
            {pokemon.name.toUpperCase()}
          </Typography>
          <Grid container
            className={classes.mainGridContainer}>
            <Grid item>
              <img
                className={classes.img}
                alt="pokemon_image"
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </Grid>
            <Grid item xs
              className={classes.pokemonInfoGrid}>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Height:
                </Typography>
                <Typography variant="body1">{pokemon.height}</Typography>
              </div>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Weight:
                </Typography>
                <Typography variant="body1">{pokemon.weight}</Typography>
              </div>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Abilities:
                </Typography>
                {pokemon.abilities.map((i, index) => {
                  return (
                    <Typography
                      key={index}
                      // className={classes.abilities}
                      variant="body1"
                    >
                      {i.ability.name},
                    </Typography>
                  );
                })}
              </div>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Forms:
                </Typography>
                {pokemon.forms.map((x, index) => {
                  return (
                    <Typography key={index} variant="body1">
                      {x.name}
                    </Typography>
                  );
                })}
              </div>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Base-Experience:
                </Typography>
                <Typography variant="body1">
                  {pokemon.base_experience}
                </Typography>
              </div>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Moves:
                </Typography>
                <Typography variant="body1">{pokemon.moves.length}</Typography>
              </div>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Order:
                </Typography>
                <Typography variant="body1">{pokemon.order}</Typography>
              </div>
              <div className={classes.pokemonInfo}>
                <Typography variant="h6" className={classes.secondaryHeaders}>
                  Species:
                </Typography>
                <Typography variant="body1">{pokemon.species.name}</Typography>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
};
export default PokemonDetails;
