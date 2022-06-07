import {React, useMemo} from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from "./styles"




export default function MapDisplay() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw",
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }
  
  function Map() {
    const center = useMemo(() => ({ lat: 27.88074, lng: -82.32977 }), []);
  
    return (
      <GoogleMap 
      zoom={10} 
      center={center} 
      mapContainerClassName="map-container"
      margin = {[50,50,50,50]}
      options = {""}
      onChange = {""}
      onChildClick ={""}
      >
        
      </GoogleMap>
    );
    
  }
