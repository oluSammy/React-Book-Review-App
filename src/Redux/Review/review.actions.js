import { reviewActionTypes } from './review.types';

import { firestore } from '../../firebase/firebase.utils';

import firebase from "firebase/app";

const getBookStart = () => ({
    type: reviewActionTypes.GET_REVIEWS_START
});

const getBooksSuccess = reviews => ({
    type: reviewActionTypes.GET_REVIEWS_SUCCESS,
    payload: reviews
});

const getBooksFailure = error => ({
    type: reviewActionTypes.GET_REVIEWS_FAILURE,
    payload: error
});

const addReviewStart = () => ({
    type: reviewActionTypes.ADD_REVIEW_START
});

const addReviewSuccess = () => ({
    type: reviewActionTypes.ADD_REVIEW_SUCCESS
});

const addReviewFailure = error => ({
    type: reviewActionTypes.ADD_REVIEW_FAILURE,
    payload: error
})

export const getReviewsAsync = (id) => {
    return async dispatch => {
        dispatch(getBookStart());

        try{
            const reviewsRef =  firestore.collection('Book').doc(id);
            reviewsRef.onSnapshot(
                docSnapshot => {
                    dispatch(getBooksSuccess(docSnapshot.data().reviews));
                }
            );
            
        } catch (err){
            dispatch(getBooksFailure(err));
        }
    }
};

export const addReviewAsync = (id, review) => {
    return async dispatch => {
        try{
            dispatch(addReviewStart())
            const updateRef = firestore.collection('Book').doc(id);
            await updateRef.update({
                reviews: firebase.firestore.FieldValue.arrayUnion(review)
            });
            dispatch(addReviewSuccess());            
        } catch(err){
            dispatch(addReviewFailure(err));
        }
    }
}