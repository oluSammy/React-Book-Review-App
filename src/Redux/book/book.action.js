import { bookActionTypes } from "./book.types";
import { firestore } from '../../firebase/firebase.utils';

const getBookStart = () => ({
    type: bookActionTypes.GET_BOOKS_START,
});

const getBooksSuccess = books => ({
    type: bookActionTypes.GET_BOOKS_SUCCESS,
    payload: books
});

const getBooksFailure = error => ({
    type: bookActionTypes.GET_BOOKS_FAILURE,
    payload: error
});

export const getBoosStartAsync = () => {
    return async dispatch => {
        dispatch(getBookStart());

        try{
            let bookArray = [];
            const books = await firestore.collection("Book").get();
            books.docs.map(doc => bookArray.push({data: doc.data(), id: doc.id}))
            dispatch(getBooksSuccess(bookArray));
        }catch(error){
            dispatch(getBooksFailure(error));
        }
    }
};     