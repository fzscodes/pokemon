import { makeStyles } from "@material-ui/core/styles";

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
      marginLeft: "10%",
      marginRight: "10%",
      maxWidth: "100%",
      backgroundColor: "whitesmoke",
    },
    img: {
      marginLeft: "10%",
    },
    secondaryHeaders: {
      color: "darkmagenta",
      marginRight: "1%",
    },
    pokemonInfoGrid: {
      marginTop: "3%",
    },
    pokemonInfo: {
      display: "flex",
      marginLeft: "30%",
      padding: "1%",
    },
    pokemonName: {
      color: "darkmagenta",
      fontWeight: "Bold",
      textAlign: "center",
      padding: "2%",
    },
    mainGridContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
  }));

export { useStyles };
