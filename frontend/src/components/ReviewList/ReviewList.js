import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

import { URL_HOST } from "../../urlHost";

const ReviewList = ({ gymId }) => {
  const [reviews, setReviews] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    fetchReviews(gymId);
  }, [gymId]);

  const fetchReviews = async (gymId) => {
    try {
      let response = await axios.get(`${URL_HOST}/api/reviews/${gymId}`);
      setReviews(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addReview = async (reviewText) => {
    try {
      await axios.post(
        `${URL_HOST}/api/reviews/`,
        { gym_id: gymId, text: reviewText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchReviews(gymId);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {user ? (
        <ReviewForm submitReview={addReview} />
      ) : (
        <p>Must be logged in to review!</p>
      )}{" "}
      <br></br>
      {reviews ? (
        reviews.map((review) => {
          return (
            <Review
              key={review.id}
              text={review.text}
              userName={review.user.username}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ReviewList;