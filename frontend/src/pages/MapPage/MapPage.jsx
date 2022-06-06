import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { Paper, Typography,useMediaQuery} from "@matertial-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";
import Rating from "@material-ui/lab";
// import useStyles from "./styles";


export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 27.88074, lng: -82.32977 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
  
}

