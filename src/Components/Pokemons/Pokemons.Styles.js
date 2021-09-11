import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootPokemons: {
    flexGrow: 1,
    backgroundColor: "lavender",
  },
  imgCard: {
    paddingTop: "5%",
    margin: "auto",
    width: "40%",
    maxHeight: "260px",
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
    justifyContent: "space-evenly",
  },
  card: {
    backgroundColor: "whitesmoke",
    "&:hover": {
      cursor: "pointer",
      transform: "scale3d(1.05, 1.05, 1)",
      backgroundColor: "white",
    },
    height: "480px",
  },
  abilities: {
    display: "flex",
    justifyContent: "space-around",
    marginRight: "2%",
    textTransform: "capitalize",
  },
  secondaryHeaders: {
    color: "darkmagenta",
    marginRight: "4%",
  },
  statLabel: {
    fontSize: 12,
    color: "grey",
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
    textTransform: "capitalize",
  },
}));

export { useStyles };
