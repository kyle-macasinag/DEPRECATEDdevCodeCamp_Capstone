import React from "react";
// import useVideoPush from "../../hooks/useVideoPush";

const GymList = ({ gyms }) => {

  return (
    <>
      {gyms ? (
        gyms.map((gym) => {
          if (gym.snippet) {
            return (
              <div className={`gym`} key={gym.id.gymId}>
                <img
                  key={gym.id.gymId}
                  src={gym.snippet.thumbnails.medium.url}
                  alt={gym.snippet.title}
                //   onClick={() => handleVideoPush(video)}
                />
                <p>{gym.snippet.title}</p>
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default GymList;



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
// 