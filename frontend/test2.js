import {React, useMemo} from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import GoogleMapReact from "google-map-react";

import useStyles from "./styles"




export default function MapDisplay() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw",
    });


    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }
  
  const Map = ({setCoordinates, setBounds, coordinates}) => {
    // const center = useMemo(() => ({ lat: 27.88074, lng: -82.32977 }), []);
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width: 600px)");
    return (
        <div className={classes.mapContainer} style={{height: "100vh", width: "100%"}}>
      <GoogleMapReact 
      bootstrapURLKeys={{key: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw"}} 
      defaultCenter={coordinates}
      center={coordinates} 
      defaultZoom={10}
      margin = {[50,50,50,50]}
      options = {""}
      onChange = {(event) => {
          console.log(event);

          setCoordinates({ lat: event.center.lat, lng: event.center.lng});
      }}
      onChildClick ={""}
      >
        
      </GoogleMapReact>
      </div>
    );
    
  }
