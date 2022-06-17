import {React, useEffect, useState} from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons";
import { Typography, InputBase, Box } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

// useEffect(() => {
//   fetchResults("Brandon,Fl");
// }, []);

// key: process.env.REACT_APP_YT_API_KEY,

// const fetchResults = async (searchTerm) => {
//   try {
//     let response = await axios.get(
//       `//maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`,
//       {
//         params: {
//           q: searchTerm,
//           key:"process.env.REACT_APP_YT_API_KEY,",
//           maxResults: 20,
//         },
//       }
//     );
//     console.log("RESPONSE:", response)
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
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
            <h1><span style={{color:"gray"}}>Travelling</span>
            <span style={{color:"white"}}>Athlete</span></h1>
          </Link>
        </li>
            {/* <div className="container">
              <SearchBar handleSearch={fetchResults} />
            </div> */}
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
