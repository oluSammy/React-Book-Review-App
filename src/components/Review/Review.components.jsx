import React from 'react'

import './Review.styles.css'

const Review = () => (
    <div className="purple lighten-5 rev">
        <div className="review-heading row">            
            <p className="review-name col">Name: <span>Olu Jasmine</span></p>
            <p className="review-name col">Date: <span>11-02-2016</span></p>
        </div>
        <div className="review">
            <p>
                <span className="review-header">
                    Review:   
                </span>
                <span className="review-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem sequi? Necessitatibus pariatur quae alias?
                </span>
            </p>
        </div>
    </div>
);

export default Review;