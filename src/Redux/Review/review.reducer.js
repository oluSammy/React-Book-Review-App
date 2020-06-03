import { reviewActionTypes } from './review.types';

const INIT_STATE = {
    reviews: null,
    isFetching: false,
    errorMessage: ''
};

const reviewReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case reviewActionTypes.GET_REVIEWS_START:
            return {
                ...state,
                isFetching: true
            }
        case reviewActionTypes.GET_REVIEWS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                reviews: action.payload
            }
        case reviewActionTypes.GET_REVIEWS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;

    }
};

export default reviewReducer;