import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import PlacesAutocomplete from "react-places-autocomplete";
// import useStyles from ./styles;

const GymDetails = ({ gym }) => {

    // const classes = useStyles();

    return(
        <Card elevation={6} >
            {/* <CardMedia    THIS DOESN'T PULL THE IMAGE OF THE GYM FOR NOW
                style={{height: 350}}
                image={gym.photo ? gym.photo.images.large.url : "https://thefightersguide.com/wp-content/uploads/2020/08/Landing-Page-BJJ-Gym.jpg"}
                title={gym.name}
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5">{gym.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Address:</Typography>
                    <Typography gutterBottom variant="subtitle1">{gym.address}</Typography>
                   
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Rating::</Typography>
                    <Typography gutterBottom variant="subtitle1">{gym.rating}</Typography>
                   
                </Box>
                                {/* BELOW SHOULD BE A BUTTON LEADING TO THE GOOGLE REVIEWS */}
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(gym.web_url, "_blank")}>
                See Reviews
                </Button>
                <Button size="small" color="primary">
                Add to Favorites
                </Button>
            </CardActions>
            </CardContent>

        </Card>
    )
}
export default GymDetails;