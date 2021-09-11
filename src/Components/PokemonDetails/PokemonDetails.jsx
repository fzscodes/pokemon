import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Card,
  Divider,
} from "@material-ui/core";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

import { ArrowBack } from "@material-ui/icons";
import IconButton from "@material-ui/core/ListItemIcon";
import { useStyles } from "./PokemonDetails.Styles";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import Footer from "../Header/Footer";

const PokemonDetails = () => {
  const history = useHistory();
  const classes = useStyles();
  const pokemon = history.location.state;
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <ArrowBack
              className={classes.backButton}
              onClick={() => history.push("/")}
            />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            POKEMONS
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <div className={classes.cardDiv}>
          <Card className={classes.card}>
            <Typography
              gutterBottom
              variant="h3"
              className={classes.pokemonName}
            >
              {pokemon.name.toUpperCase()}
              <span className={classes.pokemonID}>#00{pokemon.id}</span>
              <Divider variant="fullWidth" />
            </Typography>
            <Grid container className={classes.mainGridContainer}>
              <Grid item>
                <img
                  className={classes.img}
                  alt="pokemon_image"
                  src={pokemon.sprites.other.dream_world.front_default}
                />
              </Grid>
              <Divider variant="inset" orientation="vertical" flexItem />
              <Grid item xs>
                <Box display={"flex"} className={classes.pokemonInfo}>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Species:</p>
                    <p className={classes.statValue}>{pokemon.species.name}</p>
                  </Box>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Base-Experience:</p>
                    <p className={classes.statValue}>
                      {pokemon.base_experience}
                    </p>
                  </Box>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Moves:</p>
                    <p className={classes.statValue}>{pokemon.moves.length}</p>
                  </Box>
                </Box>
                <Divider />
                <Box display={"flex"} className={classes.pokemonInfo}>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Height: </p>
                    <p className={classes.statValue}>
                      {pokemon.height} decimeter
                    </p>
                  </Box>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Weight:</p>
                    <p className={classes.statValue}>
                      {pokemon.weight} hectograms
                    </p>
                  </Box>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Order:</p>
                    <p className={classes.statValue}>{pokemon.order}</p>
                  </Box>
                </Box>
                <Divider />
                <Box display={"flex"} className={classes.pokemonInfo}>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}> Abilities: </p>
                    <p className={classes.statValue}>
                      {pokemon.abilities.map((i, index) => {
                        return <>{i.ability.name}, </>;
                      })}
                    </p>
                  </Box>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Forms:</p>
                    <p className={classes.statValue}>
                      {pokemon.forms.map((x, index) => {
                        return <>{x.name} </>;
                      })}
                    </p>
                  </Box>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Type:</p>
                    <p className={classes.statValue}>
                      {pokemon.types.map((x, index) => {
                        return <>{x.type.name} </>;
                      })}
                    </p>
                  </Box>
                </Box>
                <Divider />
                <Box display={"flex"} className={classes.pokemonInfo}>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statValue}>STATS:</p>
                    <ResponsiveContainer height="85%" width="100%">
                      <BarChart
                        // width={"50%"}
                        // height={300}
                        data={pokemon.stats.map((p, index) => {
                          return {
                            name: p.stat.name.toUpperCase(),
                            uv: p.base_stat,
                            pv: p.effort,
                          };
                        })}
                      >
                        <XAxis dataKey="name" />
                        <Bar dataKey="uv" fill="#8884d8" barSize={35} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PokemonDetails;
