import React from 'react'

import './AddReview.styles.css'

const AddReview = () => (
    <div>
        <h5 className="center review-heading  purple lighten-1 white-text">Add Review</h5>
        <form className ="purple lighten-5 form">
                <div className="input-field">
                    <label htmlFor="review">Review</label>
                    <textarea name="" id="review" ></textarea>
                </div>                
                <div className="input-field sign-in-btn">
                    <button className="btn deep-purple darken-1 right">Submit</button>
                </div>
        </form>   
    </div>
)

export default AddReview
