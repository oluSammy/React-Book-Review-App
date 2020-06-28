import React from 'react'
import './BookDetail.styles.css'

import AddReview from '../AddReview/AddReview.components'
import Review from '../Review/Review.components';

import { selectBookSlice } from '../../Redux/book/book.selectors';

import { connect } from 'react-redux';

import { getReviewsAsync } from '../../Redux/Review/review.actions';

import { selectReviewsSlice } from '../../Redux/Review/review.selectors'; 

class BookDetail extends React.Component{
    componentDidMount(){
        this.props.getReviews(this.props.match.params.id);
    }

    render(){
        const id = this.props.match.params.id;
        const currentBook = this.props.firestoreBooks.filter(book => book.id === id);
    
        const { title, author, publisher, imgUrl, likes} = currentBook[0].data;

        

        return(
        <div className="row book-detail">
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l3 book">
                        <div className="card">
                            <div className="card-image">
                                <img src={imgUrl} alt="book"/>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 offset-m2 offset-l2">
                        <h3 className="center book-heading  purple lighten-1 white-text">Book Description</h3>
                        <p className="book-title">
                            <span className="book-heading-2 book-title-heading">TITLE:</span>
                            <span className="book-span">{title}</span>
                        </p>
                        <p className="book-author">
                            <span className="book-heading-2 book-author-heading">Author:</span>
                            <span className="book-span">{author}</span>
                        </p>
                        <p className="book-author">
                            <span className="book-heading-2 book-publisher-heading">Publisher:</span>
                            <span className="book-span">{publisher}</span>
                        </p>
                        <div>
                            <p className="likes"> <i className="far fa-heart like"/> <span> {likes}</span> Likes</p>                    
                        </div>
                        <AddReview/>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="container">
                <div className="col s12 m12 l7">
                <h3 className="center book-heading  purple lighten-1 white-text">Reviews</h3>
                    {
                        this.props.firestoreReviews ? 
                            this.props.firestoreReviews.map(review => <Review key={review.details} review={review}/>) : 
                            null
                    }
                    
                    
                </div>
            </div>
        </div>
        </div>
    )};
    }

const mapDispatchToProps = dispatch => ({
    getReviews: (id) => dispatch(getReviewsAsync(id))
})

const mapStateToProps = state => ({
    firestoreBooks: selectBookSlice(state),
    firestoreReviews: selectReviewsSlice(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);