import React, {useState, useEffect } from "react";
import {useParams, useLocation} from "react-router-dom";
import axios from "axios";
import "./GymPage.css";
import ReviewList from "../../components/ReviewList/ReviewList";
//Review List Import Here
import GymList from "../../components/GymList/GymList";
import GymInfo from "../../components/GymInfo/GymInfo";

const GymPage = () => {
    const { gymId } = useParams();
    const { state } = useLocation();
  

  
    return (
      <div className="wrapper">
        <div className="gymPlayer">
          <GymInfo title={state.title} />
        </div>
        <div className="reviewList">
          <ReviewList gymId={gymId} />
        </div>
      </div>
    );
  };
  
  export default GymPage;