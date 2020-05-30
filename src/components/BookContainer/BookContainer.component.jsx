import React from 'react'

import Book from '../Book/Book.component';

import './BookContainer.styles.css'

const BookContainer = () => (
    <div className="row book-container">
        <div className="container">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        </div>
    </div>
);

export default BookContainer;