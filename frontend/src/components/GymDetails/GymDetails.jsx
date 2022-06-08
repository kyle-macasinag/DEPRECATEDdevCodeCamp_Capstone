import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import PhoneIcon From "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles"
import { Place } from "@material-ui/icons";


const GymDetails = ({ gym }) => {
    console.log(gym)
    const classes = useStyles();
    return(
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350}}
                image={gym.photo ? Place.photo.images.large.url : "https://thefightersguide.com/wp-content/uploads/2020/08/Landing-Page-BJJ-Gym.jpg"}
                title={gym.name}
                
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{gym.name}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">{gym.price_level}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">{gym.ranking}</Typography>
                    </Box>
                    {gym?.awards?.map((award) => (
                        <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                            <img src={award.images.small} alt={award.display_name}/>
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                        </Box>

                    ))}
                </CardContent>
        </Card>
    )
}
export default GymDetails;