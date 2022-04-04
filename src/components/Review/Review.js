import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name,greetings,review} = props.review
    return (
        <div className='review-list'>
            <h2>Review By:<p className='text-fuchsia-600'>{name}</p> </h2>
            <h2>"{review}"</h2>
            <h1 className='text-xl'>Rating:{greetings}</h1>
        </div>
    );
};

export default Review;