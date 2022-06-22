import { Component, useState, setState} from 'react';
import axios from 'axios';
// import { getGymsData } from '../../api';
var globeVar = "TAmpa, Fl";

const SearchBar = () => {
  const [title, setTitle] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  var search = { title };
  console.log("SEARCH:", search);
 
  // (function(){
  //   globeVar = search;
  // })();
  function setGlobal(){
   globeVar = {search};
    console.log("Global:", globeVar)
  }
  setGlobal();

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

export default SearchBar

const URL = 'https://google-location-data.p.rapidapi.com/search'




export const getGymsData = async () => {
  

    try {
        console.log("OTHER GLOBAL:", globeVar)
        const {data} = await axios.get(URL, {

          params: {query: `Jiu Jitsu Gyms in ${globeVar}`,//Query will be interpolated
           isNumber: 'false',
            lang: 'en'},
          headers: {
             'rapidapi-auth': 'AIzaSyAIrHeTPljOYzhcZBiT3OfCgb80KdrbVGc',//NEEDS TO BECOME AN ENV VARIABLE
             'X-RapidAPI-Host': 'google-location-data.p.rapidapi.com',
             'X-RapidAPI-Key': '81093bc095mshb81ae5f8135eab3p102351jsna25df92c319c'//THIS ONE TOO MAYBE??
          }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}