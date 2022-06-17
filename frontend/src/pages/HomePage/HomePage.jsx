import { React, useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
// import GoogleMapReact from "google-map-react";
import GymList from "../../components/GymList/GymList";
import { CssBaseline, Grid } from "@material-ui/core";
// import useStyles from "./styles"
import { getGymsData } from "../../api";

export default function HomePage() {
  const [gyms, setGyms] = useState([]);

  const [coordinates, setCoordinates] = useState([]);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    getGymsData().then((data) => {
      console.log(data);
      setGyms(data.results);
    });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map gyms={gyms} />;
}

const Map = (props) => {
  const { setCoordinates, setBounds, coordinates, gyms } = props;
  const center = useMemo(() => ({ lat: 27.88074, lng: -82.32977 }), []);

  return (
    <Grid container spacing={3} style={{ width: "100%" }}>
      <Grid item xs={12} md={4}>
        {console.log("Gyms before GymList call: ", gyms)}
        <GymList 
        gyms={gyms}
        />
      </Grid>
      <Grid item xs={12} md={8}>
      <GoogleMap 
  zoom={10} 
  defaultCenter={center}
  center={center} 
  mapContainerClassName="map-container"
  margin = {[50,50,50,50]}
  options = {""}
  onChange = {(event) => {
      console.log(event);

      setCoordinates({ lat: event.center.lat, lng: event.center.lng});
  }}
  onChildClick ={""}
//   gyms={gyms} THIS IS INVOLVED IN THE PINS
  >
    
  </GoogleMap>
      </Grid>
    </Grid>
  );
};