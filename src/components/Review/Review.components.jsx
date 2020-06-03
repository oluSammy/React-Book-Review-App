import React from 'react';

import './Review.styles.css';

const Review = ({review: {details, name, date}}) => {    
    
    return(
        <div className="purple lighten-5 rev">
            <div className="review-heading row">            
                <p className="review-name col">Name: <span>{name}</span></p>
            </div>
            <div className="review">
                <p>
                    <span className="review-header">
                        Review:   
                    </span>
                    <span className="review-text">
                        {details}
                    </span>
                </p>
            </div>
        </div>
)};

export default Review;