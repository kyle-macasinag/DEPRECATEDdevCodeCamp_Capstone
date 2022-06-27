import axios from "axios";



// const axios = require("axios");

const URL = 'https://google-location-data.p.rapidapi.com/search'




export const getGymsData = async () => {


    try {
        const {data} = await axios.get(URL, {

          params: {query: `Jiu Jitsu Gyms in ${""}`,//Query will be interpolated
           isNumber: 'false',
            lang: 'en'},
            // bl_latitude: "11",
            // tr_latitude: "12",
            // bl_longitude: "109",
            // tr_longitude: "109",
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