import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Divider,
  Box,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "./Pokemons.Styles";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

const Pokemons = (props) => {
  const classes = useStyles();
  const { pokemonData } = props;
  const history = useHistory();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });

  return (
    <>
      <div className={classes.rootPokemons}>
        <Grid
          container
          spacing={10}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {pokemonData.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={pokemonData.indexOf(item)}
            >
              <Card
                className={classes.card}
                onClick={() => {
                  history.push({
                    pathname: "/pokemonDetails",
                    state: item,
                  });
                }}
              >
                <CardMedia
                  className={classes.imgCard}
                  component="img"
                  alt="Pokemon images"
                  image={item.sprites.other.dream_world.front_default}
                  title="Pokemon images"
                />
                <CardHeader
                  id="pokemon-name"
                  titleTypographyProps={{ variant: "h4" }}
                  title={item.name.toUpperCase()}
                  className={classes.name}
                />
                <Divider variant="middle" />
                <Box display={"flex"} className={classes.pokemonInfo}>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Height:</p>
                    <p className={classes.statValue}>{item.height} </p>
                  </Box>
                  <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                    <p className={classes.statLabel}>Weight:</p>
                    <p className={classes.statValue}>{item.weight}</p>
                  </Box>
                </Box>
                <Divider variant="middle" />
                <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                  <p className={classes.statLabel}> Abilities: </p>
                  <p className={classes.statValue}>
                    {item.abilities.map((i, index) => {
                      return <>{i.ability.name}, </>;
                    })}
                  </p>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default Pokemons;
