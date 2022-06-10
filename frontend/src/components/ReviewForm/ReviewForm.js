import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = ({ submitReview }) => {
  const [reviewText, setReviewText] = useState("");

  return (
    <form
      className="commentForm"
      onSubmit={(e) => {
        e.preventDefault();
        submitReview(reviewText);
        setReviewText("");
      }}
    >
      <label>
        Enter Review: {""}{" "}
        <input
          type="text"
          name="reviewText"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </label>
    </form>
  );
};

export default ReviewForm;
