import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const Review = (props) => {
    const {name,greetings,review,picture} = props.review
    return (
        <div className='review-list'>
            <div className="reviewer-img">
            <img src={picture} alt="" />
            </div>
           <div className="reviewer-details">
           <h2 >Review By:<small className='text-fuchsia-600 font-medium'>{name}</small></h2>
            <h2>"{review}"</h2>
            <h1 className='text-xl'>Rating:{greetings} <FontAwesomeIcon className='text-yellow-500' icon={faStar}></FontAwesomeIcon> </h1>
           </div>
        </div>
    );
};

export default Review;