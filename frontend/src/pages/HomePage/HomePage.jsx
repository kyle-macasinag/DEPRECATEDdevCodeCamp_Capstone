import { useMemo } from "react";
import { GoogleMap, Marker} from "react-google-maps";
//Not sure you need this:
import { withScriptjs } from "react-google-maps";

export default function HomePage() {
  const { isLoaded } = withScriptjs ({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
});

if (!isLoaded) return <div>Loading...</div>;
return <div>Map</div>;
}

function Map() {
  return <GoogleMap zoom={10} center = {{lat:44, lng: -80}} mapContainerClassName= "map-container"></GoogleMap>
}

