import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ArrowBackIos } from "@material-ui/icons";
import IconButton from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import SearchBar from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "lavender",
  },
  backButton: {
    color: "white",
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
  paper: {
    // padding: theme.spacing(24),
    marginTop: "5%",    
    margin: "auto",    
    width: "60%",
    minHeight: "70vh",
    backgroundColor: "whitesmoke",
  },
  imageGrid: {
    width: "50vh",    
    height: "50vh",
    margin:"2%",
  },
  img: {
    margin: "auto",
    display: "block",
    paddingTop:"10%",
  },
  gridContainer: {
    // justifyContent
    marginTop: "3%",
    // marginLeft:"30%",
  },
}));

const PokemonDetails = () => {
  const history = useHistory();
  const classes = useStyles();
  console.log(history.location);
  const pokemon = history.location.state;

  return (
    <>
    <div className={classes.root}>
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
      
        <Paper className={classes.paper}>
          <Grid container spacing={12}>
            <Grid item className={classes.imageGrid}>
              <img
                className={classes.img}
                alt="pokemon_image"
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.gridContainer}>
                <Typography gutterBottom variant="h3">
                  {pokemon.name.toUpperCase()}
                </Typography>
                <Typography variant="" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};
export default PokemonDetails;
