import { ClassNames } from "@emotion/react";
import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <box dixplay="flex">
        <Typography variant="h6">
          <h2>Find a place to Train!</h2>
        </Typography>
      </box>
      <ul>
        <li>
          {user ? (
          <button onClick={() => navigate("/favorites")}>Favorites</button>
          ): (
            <p></p>
          )}
        </li>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none"}}>
            <h1><span style={{color:"black"}}>Travelling</span>
            <span style={{color:"white"}}>Athlete</span></h1>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
