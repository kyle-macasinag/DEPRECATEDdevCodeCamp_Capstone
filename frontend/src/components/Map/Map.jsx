import React, {useEffect, useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};


const center = {
  lat: 27.88078,
  lng: -82.32976
};


function MyMap({gyms}) {
  console.log("GYMDET:", gyms)

  

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  // const GymDetails = ({ gym }) => { 

  //   console.log("DETAILS:", [gym.location.lat, gym.location.long])
  // }


  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
        
      >
        
        { /* Child components, such as markers, info windows, etc. */ }
        
        {
          newGyms = gyms.map(makeMarkers())
          function makeMarkers(Marker position = [gym.location.lat, gym.location.long])
        }

        {/* <Marker position={center}></Marker> */}
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap)