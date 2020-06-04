import React from 'react';

import './AddReview.styles.css';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { selectUserSlice } from '../../Redux/user/user.selectors';

import { addReviewAsync } from '../../Redux/Review/review.actions';

class AddReview extends React.Component{ 

    state={
        name: '',
        review: ''
    }
    
    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const addReview = this.props.addReview;
        const id = this.props.match.params.id;
        const {name, review} = this.state;
        addReview(id, {name, details: review});
        this.setState({name: '', review: ''});
    }
    
    render(){        
        return(
        <div>
            <h5 className="center review-heading  purple lighten-1 white-text">Add Review</h5>
            {
                this.props.currentUser ? 
                <form className ="purple lighten-5 form" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Name:</label>
                        <input type="text"  name="name" value={this.state.name} required onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="review">Review</label>
                        <textarea name="review" value={this.state.review} required onChange={this.handleChange}/>
                    </div>                
                    <div className="input-field sign-in-btn">
                        <button className="btn deep-purple darken-1 right">Submit</button>
                    </div>
                </form>
            :
                <h5 className="center">Sign In to add review</h5>
               
            }
        </div>
    )
    }
}

const mapDispatchToProps = dispatch => ({
    addReview: (id, review) => dispatch(addReviewAsync(id, review))
})
        
const mapStateToProps = state => ({
    currentUser: selectUserSlice(state)
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)
    (AddReview)
    );
