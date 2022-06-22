import { React, useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import MyMap from "../../components/Map/Map"
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
// import GoogleMapReact from "google-map-react";
import GymList from "../../components/GymList/GymList";
import { CssBaseline, Grid } from "@material-ui/core";
// import useStyles from "./styles"
// import { getGymsData } from "../../api";
import { getGymsData } from "../../components/SearchBar/SearchBar";
// import SearchBar from "../../components/SearchBar/SearchBar";

export default function HomePage() {
  const [gyms, setGyms] = useState([]);
  
  


  useEffect(() => {
    getGymsData().then((data) => {
      console.log(data);
      setGyms(data.results);
    });
  }, []);

  



  return (
    <Grid container spacing={3} style={{ width: "100%" }}>
      <Grid item xs={12} md={4}>
        {console.log("Gyms before GymList call: ", gyms)}
        <GymList 
        gyms={gyms}
        />
      </Grid>
      <Grid item xs={12} md={8}>
      <MyMap
      gyms={gyms}
      />
      </Grid>S
    </Grid>
  );
};

