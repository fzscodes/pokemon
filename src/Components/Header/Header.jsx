import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { getByTestId } from "@testing-library/dom";
import { useStyles } from "./Header.Styles";

export default function Header(props) {
  const classes = useStyles();
  const { searchKeyWord, setSearchKeyWord } = props;

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            POKEMONS
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onSubmit={onSearchSubmitHandler}
              placeholder="Search by name or ability..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchKeyWord}
              onChange={(e) => setSearchKeyWord(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
