import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "lavender",
    },
    imgCard: {
      paddingTop: "5%",
      margin: "auto",
      width: "40%",
      paddingBottom: "5%",
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
    },
    abilities: {
      display: "flex",
      justifyContent: "space-around",
      marginRight: "2%",
    },
    secondaryHeaders: {
      color: "darkmagenta",
      marginRight: "4%",
    },
  }));

  export { useStyles }