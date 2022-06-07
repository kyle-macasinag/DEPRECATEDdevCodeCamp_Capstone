import React, { useState } from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core"
import useStyles from "./GymListStyles"

const GymList = () => {
    const classes = useStyles();

   
     const[type, setType] = useState("gyms");
     const[rating, setRating] = useState("");

     const places = [
         {name: "cool place"},
         {name: "Best Place"},
         {name: "Competetive Gym"},
     ]

    return (
        <div className={classes.container}>
            <Typography classname variant="h4">Gyms in the area</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <menuItem value="gyms">Gyms</menuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <menuItem value={0}>All</menuItem>
                    <menuItem value={3}>Above 3.0</menuItem>
                    <menuItem value={4}>Above 4.0</menuItem>
                    <menuItem value={4.5}>Above 4.5</menuItem>
                </Select>
            </FormControl>
            {/* t was here */}
            <Grid container spacing={""} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        {/* <PlaceDetails place={place}/> */}
            </Grid>
                ))}
                </Grid>
        </div>
    );
}

export default GymList;