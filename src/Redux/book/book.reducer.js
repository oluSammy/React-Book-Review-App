import { bookActionTypes } from './book.types';

const INIT_STATE = {
    books: [],
    isFetching: false,
    errorMessage: ''
};

const bookReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case bookActionTypes.GET_BOOKS_START:
            return{
                ...state,
                isFetching: true
            }
        case bookActionTypes.GET_BOOKS_SUCCESS: 
            return{
                ...state,
                isFetching: false ,
                books: action.payload
            }
        case bookActionTypes.GET_BOOKS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload 
            }
        default :
            return state;
    }
};

export default bookReducer;