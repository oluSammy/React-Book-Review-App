import React from 'react';

import Book from '../Book/Book.component';

import './BookContainer.styles.css';

import { firestore } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';


import { getBoosStartAsync } from '../../Redux/book/book.action';


class BookContainer extends React.Component {
     
    async componentDidMount(){
        this.props.getBooksFromFirestore();        
    }
    render(){
        const {  firestoreBooks } = this.props;
        
        return(
            <div className="row book-container">
                <div className="container">
                    {
                        firestoreBooks ? firestoreBooks.map(book => <Book book = {book} key={book.title}/>) : <h1>Loading</h1>
                    }
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    getBooksFromFirestore: () => dispatch(getBoosStartAsync())
});

const mapStateToProps = ({book}) => ({
    firestoreBooks: book.books
})

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);