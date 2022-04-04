import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useReview()
    return (
        <div>
          <h2>All Reviews: {reviews.length}</h2>
        </div>
    );
};

export default Reviews;