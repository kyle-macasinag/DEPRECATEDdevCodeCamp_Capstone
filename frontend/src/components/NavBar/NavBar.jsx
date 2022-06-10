import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
// import SearchBar from "../SearchBar/SearchBar";
import { Autocomplete } from "@react-google-maps/api";
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import { ClassNames } from "@emotion/react";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
    <Toolbar className={classes.Toolbar}>
    <Typography variant="h5" className={classes.title}>
    The Travelling Athlete
    </Typography>
    <Box dixplay="flex">
      <Typography variant="h6" className={classes.title}>
        Find a place to train!
      </Typography>
      {/* <Autocomplete> */}
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search!" classes={{root: classes.inputRoot, input: classes.inputInput}} />
        </div>
      {/* </Autocomplete> */}
    </Box>
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;
