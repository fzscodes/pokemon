import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lavender",
    flexGrow: 1,
  },
  pokemonID:{
  color: "grey",
  marginLeft: "2%"
  },
  cardDiv: {
    flexGrow: 1,
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
    marginLeft: "10%",
    marginRight: "10%",
    maxWidth: "100%",
    backgroundColor: "whitesmoke",
  },
  img: {
    marginLeft: "10%",
    marginRight: "10%", 
  },
  secondaryHeaders: {
    color: "darkmagenta",
    marginRight: "1%",
  },
  pokemonInfo:{
    marginLeft: "5%",
    textTransform: "capitalize",
  },  
  pokemonName: {
    color: "darkmagenta",
    fontWeight: "Bold",
    textAlign: "center",
    padding: "2%",
  },
  mainGridContainer: {
    display: "flex",    
  },  
  statLabel: {
    fontSize: 14,
    color: "grey",
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export { useStyles };
