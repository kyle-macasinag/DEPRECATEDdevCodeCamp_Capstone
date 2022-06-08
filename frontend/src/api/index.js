import axios from "axios";



// const axios = require("axios");

const URL = 'https://google-location-data.p.rapidapi.com/search'


// params: {query: `Jiu Jitsu Gyms Brandon, Fl`,
// isNumber: 'false',
//  lang: 'en'},

const options = {


    bl_latitude: "11",
    tr_latitude: "12",
    bl_longitude: "109",
    tr_longitude: "109",
  headers: {
    'rapidapi-auth': 'AIzaSyB9HYwoUmm9j7YDJ5ZQMlqzi4sgCbFVAQw',//NEEDS TO BECOME AN ENV VARIABLE
    'X-RapidAPI-Host': 'google-location-data.p.rapidapi.com',
    'X-RapidAPI-Key': '81093bc095mshb81ae5f8135eab3p102351jsna25df92c319c'//THIS ONE TOO MAYBE??
  }
};



export const getPlacesData = async (sw, ne) => {


    try {
        const {data: data} = await axios.get(URL, options);

        return data;
    } catch (error) {
        console.log(error)
    }
}