import React from "react";
import Stars from "./stars";

const Review = ({ username, rating, review }) => {
  return (
    <div>
      <Stars username={username} rating={rating} />
      <div>{review}</div>
      <br />
    </div>
  );
};

export default Review;