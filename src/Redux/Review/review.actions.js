import { reviewActionTypes } from './review.types';

import { firestore } from '../../firebase/firebase.utils';

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

export const getReviewsAsync = (id) => {
    return async dispatch => {
        dispatch(getBookStart());

        try{
            const reviews = await firestore.collection('Book').doc(id);
            reviews.onSnapshot(doc => {
                console.log(doc.data().reviews)
                dispatch(getBooksSuccess(doc.data().reviews));
            }
          );
            
        } catch (err){
            dispatch(getBooksFailure(err));
            console.log(err);
        }
    }
}