import React from "react";
import "./SearchResultsPage.css";
import GymList from "../../components/GymList/GymList";

const SearchResultsPage = ({ results }) => {
  return (
    <div>
      <div className="searchGrid">
        <GymList  gyms={results} />
      </div>
    </div>
  );
};

export default SearchResultsPage;