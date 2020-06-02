import React from 'react';

import Book from '../Book/Book.component';

import './BookContainer.styles.css';

import { connect } from 'react-redux';


import { getBoosStartAsync } from '../../Redux/book/book.action';

//selector
import { selectBookSlice } from "../../Redux/book/book.selectors";


class BookContainer extends React.Component {
     
    componentDidMount(){
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

const mapStateToProps = (state) => ({
    firestoreBooks: selectBookSlice(state)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (BookContainer);