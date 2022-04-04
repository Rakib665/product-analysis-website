import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useReview()
    return (
        <div>
          <h2>All Reviews: {reviews.length}</h2>
          {
            reviews.map(review => <Review
            key= {review.id}
            review ={review}
            ></Review>)
          }
        </div>
    );
};

export default Reviews;