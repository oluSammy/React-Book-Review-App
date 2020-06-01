import React from 'react'
import './BookDetail.styles.css'

import AddReview from '../AddReview/AddReview.components'
import Review from '../Review/Review.components';

const BookDetail = (props) => {
    const id = props.match.params.id
    return(
    <div className="row book-detail">
        <div className="container">
            <div className="row">
                <div className="col s12 m4 l3 book">
                    <div className="card">
                        <div className="card-image">
                            <img src={require(`../../assets/img/obama_book.jpg`)} alt="book"/>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6 offset-m2 offset-l2">
                    <h3 className="center book-heading  purple lighten-1 white-text">Book Description {id}</h3>
                    <p className="book-title">
                        <span className="book-heading-2 book-title-heading">TITLE:</span>
                        <span className="book-span">The Audacity Of Hope</span>
                    </p>
                    <p className="book-author">
                        <span className="book-heading-2 book-author-heading">Author:</span>
                        <span className="book-span">Barack Obama</span>
                    </p>
                    <p className="book-author">
                        <span className="book-heading-2 book-publisher-heading">Publisher:</span>
                        <span className="book-span">UNILEVER</span>
                    </p>
                    <p className="book-author">
                        <span className="book-heading-2 book-date-heading">Date Published:</span>
                        <span className="book-span">13-sep-2008</span>
                    </p>

                    <div>
                        <p className="likes"> <i className="far fa-heart like"/> <span> 2000</span> Like</p>                    
                    </div>
                    <AddReview/>
                </div>
            </div>
        </div>
        <div className="row">
        <div className="container">
            <div className="col s12 m12 l7">
            <h3 className="center book-heading  purple lighten-1 white-text">Reviews</h3>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
        </div>
    </div>
    </div>
)};

export default BookDetail;