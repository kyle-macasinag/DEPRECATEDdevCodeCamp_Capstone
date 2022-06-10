// import {React, useMemo} from 'react';
// import { GoogleMap, useLoadScript } from '@react-google-maps/api';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
// import GoogleMapReact from "google-map-react";


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyB9HYwoUmm9j7YDJ5ZQMlqzi4sgCbFVAQw"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;



// export default function MapDisplay() {
//     const { isLoaded } = useLoadScript({
//       googleMapsApiKey: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw",
//     });
  
//     if (!isLoaded) return <div>Loading...</div>;
//     return <Map />;
//   }
  
//   const Map = (setCoordinates, setBounds, coordinates) => {
//     const center = useMemo(() => ({ lat: 27.88074, lng: -82.32977 }), []);
  
//     return (
//       <GoogleMapReact 
//       zoom={10} 
//       defaultCenter={center}
//       center={center} 
//       mapContainerClassName="map-container"
//       margin = {[50,50,50,50]}
//       options = {""}
//       onChange = {(event) => {
//           console.log(event);

//           setCoordinates({ lat: event.center.lat, lng: event.center.lng});
//       }}
//       onChildClick ={""}
//       >
        
//       </GoogleMapReact>
//     );
    
//   }
