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
import { useHistory } from "react-router-dom";
import {useStyles} from './Pokemons.Styles';


const Pokemons = (props) => {
  const classes = useStyles();
  const { pokemonData } = props;
  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          spacing={10}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          //
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
                        <Typography>{item.height}</Typography>
                      </div>
                      <div className={classes.pokemonInfo}>
                        <Typography
                          variant="h6"
                          className={classes.secondaryHeaders}
                        >
                          Weight:
                        </Typography>
                        <Typography>{item.weight}</Typography>
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
                            key={index}
                            className={classes.abilities}
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
      </div>
    </>
  );
};
export default Pokemons;
