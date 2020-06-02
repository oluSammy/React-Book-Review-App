import { bookActionTypes } from "./book.types";
import { firestore } from '../../firebase/firebase.utils';

export const getBookStart = () => ({
    type: bookActionTypes.GET_BOOKS_START,
});

export const getBooksSuccess = books => ({
    type: bookActionTypes.GET_BOOKS_SUCCESS,
    payload: books
});

export const getBooksFailure = error => ({
    type: bookActionTypes.GET_BOOKS_FAILURE,
    payload: error
})

export const getBoosStartAsync = () => {
    return async dispatch => {
        dispatch(getBookStart());

        try{
            let bookArray = [];
            const books = await firestore.collection("Book").get();
            books.docs.map(doc => bookArray.push(doc.data()))
            dispatch(getBooksSuccess(bookArray));
        }catch(error){
            dispatch(getBooksSuccess(error));
        }
        // books.docs.map(doc => this.setState({books: [...this.state.books, doc.data()]})); //add books to state
    }
}