// General Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";
import SearchBar from "../../components/SearchBar/SearchBar";
 import GymPage from "../GymPage/GymPage";

function HomePage() {
  const [searchResults, setSearchResults] = useState();
  const navigate = useNavigate();

  if (process.env.NODE_ENV !== "production") {
    console.log("It's working!");
  }

  useEffect(() => {
    fetchResults("jiu jitsu");
  }, []);

  const fetchResults = async (searchTerm) => {
    try {
      let response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=jiu+jitsu+gym&location=27.92859,-82.33153&radius=2000&region=us&type=gym&key=AIzaSyB9HYwoUmm9j7YDJ5ZQMlqzi4sgCbFVAQw`,
        {
          params: {
            q: searchTerm,
            maxResults: 20,
          },
        }
      );
      setSearchResults(response.data.items);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <SearchBar handleSearch={fetchResults} />
      <Routes>
        <Route
          path="/"
          element={<SearchResultsPage results={searchResults} />}
        />
        // <Route path="/:gymId" element={<GymPage />} />
      </Routes>
    </div>
  );
}

export default HomePage;
