import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pagination: {
    "& > *": {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
    },
  },
  rootMain: {
    flexGrow: 1,
    padding: theme.spacing(12),
    backgroundColor: "lavender",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  sortingAndPagination: {
    display: "flex",
    justifyContent: "space-between",
  },
  formControlDiv: {
    display: "flex",
    flexDirection: "flex-start",
  },
}));

export { useStyles };
