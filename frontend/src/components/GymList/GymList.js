import React, { useState } from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core"
import GymDetails from "../GymDetails/GymDetails";

 const GymList = () => {
    const [gym, setGym] = useState("")//Jiu Jitsu Gyms
    const [rating, setRating] = useState(""); //Probably leave blank

    <div return className={container} >
        <Typography classname variant="h4">Gyms in the area</Typography>
        <Form>
            <Form.Text className="">
                Search for a Gym!
            </Form.Text>
        </Form>
    </div>
}



// const GymList = () => {
//     const classes = useStyles();

   
//      const[type, setType] = useState("jiu jitsu gyms");
//      const[rating, setRating] = useState("");

//      //PLACEHOLDER CARDS
//      const gyms = [
//          {name: "cool place"},
//          {name: "Best Place"},
//          {name: "Competetive Gym"},
//      ]

//     return (
//         <div className={classes.container}>
//             <Typography classname variant="h4">Gyms in the area</Typography>
//             <FormControl className={classes.formControl}>
//                 <InputLabel>Type</InputLabel>
//                 <Select value={type} onChange={(e) => setType(e.target.value)}>
//                     <MenuItem value="jiu jitsu gyms">Gyms</MenuItem>
//                 </Select>
//             </FormControl>
//             <FormControl className={classes.formControl}>
//                 <InputLabel>Rating</InputLabel>
//                 <Select value={rating} onChange={(e) => setRating(e.target.value)}>
//                     <MenuItem value={0}>All</MenuItem>
//                     <MenuItem value={3}>Above 3.0</MenuItem>
//                     <MenuItem value={4}>Above 4.0</MenuItem>
//                     <MenuItem value={4.5}>Above 4.5</MenuItem>
//                 </Select>
//             </FormControl>

//             <Grid container spacing={3} className={classes.list}>
//                 {gyms?.map((gym, i) => (
//                     <Grid item key={i} xs={12}>
//                         <GymDetails gym={gym}/>
//             </Grid>
//                 ))}
//                 </Grid>
//         </div>
//     );
// }

export default GymList;