import {React, useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import { ClassNames } from '@emotion/react';

// import GoogleMapReact from "google-map-react";

// import useStyles from "./styles"




export default function MapDisplay() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw",
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }
  
  const Map = (setCoordinates, setBounds, coordinates, gyms) => {
    const center = useMemo(() => ({ lat: 27.88074, lng: -82.32977 }), []);
  
    return (
      <GoogleMap 
      zoom={10} 
      defaultCenter={center}
      center={center} 
      mapContainerclassName="map-container"
      margin = {[50,50,50,50]}
      options = {""}
      onChange = {(event) => {
          console.log(event);

          setCoordinates({ lat: event.center.lat, lng: event.center.lng});
      }}
      onChildClick ={""}
      >
        {gyms && <Marker position={gyms} />}
        {/* {gyms?.map((gym) => (
          <div
            className={classes.markerContainer}
            lat={Number(gym.latitude)}
            lng={Number(gym.longitude)}
            key={i}
          >

          </div>
        ))} */}
      </GoogleMap>
    );
    
  }
