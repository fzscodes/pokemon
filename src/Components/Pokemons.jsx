import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    "&:hover": {
      cursor: "pointer",
      transform: "scale3d(1.05, 1.05, 1)",
      backgroundColor: "white",
    },
  },
  abilities: {
    display: "flex",
    justifyContent: "space-around",
  },
  secondaryHeaders: {
    color: "darkmagenta",
  },
}));

const Pokemons = (props) => {
  const classes = useStyles();
  const { pokemonData } = props;
  const history = useHistory();

  return (
    <>
      <Grid
        container
        spacing={10}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {pokemonData.map((item) => (
          <Grid item md={3} key={pokemonData.indexOf(item)}>
            <Card
              className={classes.card}
              onClick={() => {
                console.log(item);
                history.push({
                  pathname: "/pokemonDetails",
                  state: item ,
                });
              }}
            >
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
              <Divider variant="middle" />
              <div className={classes.cardContent}>
                <CardContent>
                  <div className={classes.height_width}>
                    <div className={classes.pokemonInfo}>
                      <Typography
                        variant="h6"
                        className={classes.secondaryHeaders}
                      >
                        Height:
                      </Typography>
                      <Typography style={{ marginLeft: 10 }}>
                        {item.height}
                      </Typography>
                    </div>
                    <div className={classes.pokemonInfo}>
                      <Typography
                        variant="h6"
                        className={classes.secondaryHeaders}
                      >
                        Weight:
                      </Typography>
                      <Typography style={{ marginLeft: 10 }}>
                        {item.weight}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.pokemonInfo}>
                    <Typography
                      variant="h6"
                      className={classes.secondaryHeaders}
                    >
                      Abilities:
                    </Typography>
                    {item.abilities.map((i, index) => {
                      return (
                        <Typography
                          className={classes.abilities}
                          style={{ marginLeft: 10 }}
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
    </>
  );
};
export default Pokemons;
