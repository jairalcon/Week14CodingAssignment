import React, { useState } from "react";
import ReviewForm from "./review-form";
import ReviewList from "./review-list";

const Movie = ({ title, img, director, releasedate, plot}) => {
  // for the array or reviews
  const [reviews, setNewReview] = useState([]);

  // function that will add newReview to reviews array
  function addReview(newReview) {
    setNewReview((prevReviews) => {
      return [...prevReviews, newReview];
    });
  }

  return (
    <>
      <div className="flex-container" id="movieContainer">
        <div className="row">
          <div className="col-sm-4">
            <img src={img} alt={`${title} Movie`} id="poster" />
          </div>
          <div className="col-sm-8">
            <div className="row">
              <h1>{title}</h1>
              <div className="col-sm-5">
                <h5>{director}</h5>
                <h6>{releasedate}</h6>
                <p className="plot">{plot}</p>
                <ReviewForm onAdd={addReview} />
              </div>
              <div className="col-sm-7">
                {reviews.map((reviewItem, index) => {
                  return (
                    <ReviewList
                      key={index}
                      id={index}
                      username={reviewItem.username}
                      review={reviewItem.review}
                      rating={reviewItem.stars}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;