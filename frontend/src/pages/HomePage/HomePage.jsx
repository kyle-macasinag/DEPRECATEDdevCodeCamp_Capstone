import { Component } from "react"
import {Map, GoogleApiWrapper} from "google-maps-react"

class MapContainer extends Component {
    render() {
        return(
            <Map
            google = {this .props.google}
            style = {{width:"100%", height:"100%"}}
            zoom = {10}
            initalCenter = {
                {
                    lat: 27.88079,
                    lng: -82.32976
                }
            }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyAYovgZ5lEWHFrnuWqM4fBvBD0QEZhH_Pw"
})(MapContainer)