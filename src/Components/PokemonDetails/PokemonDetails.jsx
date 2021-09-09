import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, Card } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import IconButton from "@material-ui/core/ListItemIcon";
import {useStyles} from './PokemonDetails.Styles';


const PokemonDetails = () => {
  const history = useHistory();
  const classes = useStyles();
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
        <Card className={classes.card}>
          <Typography gutterBottom variant="h3" className={classes.pokemonName}>
            {pokemon.name.toUpperCase()}
          </Typography>
          <Grid container className={classes.mainGridContainer}>
            <Grid item>
              <img
                className={classes.img}
                alt="pokemon_image"
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </Grid>
            <Grid item xs className={classes.pokemonInfoGrid}>
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
                    <Typography key={index} variant="body1">
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
