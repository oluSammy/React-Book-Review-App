import React from 'react'
import './Book.styles.css'

import { Link } from 'react-router-dom'

const Book = () => (    
    <Link to="/book">
        <div className="col s6 m4 l3 book">
            <div className="card">
                <div className="card-image">
                    <img src={require(`../../assets/img/obama_book.jpg`)} alt="book"/>
                </div>
            </div>
            <div className="content">
                <p className="title">The Audacity of Hope</p>
                <div>
                    <span className="author">Barack Obama</span> 
                    <i class="far fa-heart like"/> <span> 2000</span>
                </div>
            </div>
            <Link className="btn view-book purple darken-3">View Book</Link>
        </div>
    </Link>
        
);

export default Book;
