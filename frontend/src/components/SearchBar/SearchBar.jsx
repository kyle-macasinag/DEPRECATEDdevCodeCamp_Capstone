import {React, useState, setState} from 'react';
import axios from 'axios';
// import { getGymsData } from '../../api';




const SearchBar = () => {
  const [title, setTitle] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  var search = { title };
  console.log("SEARCH:", search);
  

}

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>City Name:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Search!</button>
      </form>
    </div>
  );
}




export default SearchBar;

// const axios = require("axios");

