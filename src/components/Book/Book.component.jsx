import React from 'react'
import './Book.styles.css'

import { Link } from 'react-router-dom'

const Book = ({book: {title, imgUrl, author, likes}}) => (        
    <Link to="/book/hello">
        <div className="col s6 m4 l3 book">
            <div className="card">
                <div className="card-image">
                    <img src={`${imgUrl}`} alt="book"/>
                </div>
            </div>
            <div className="content">
                <p className="title">{title}</p>
                <div>
                    <span className="author">{author}</span> 
                    <i className="far fa-heart like"/> <span> {likes}</span>
                </div>
            </div>
        </div>
    </Link>
        
);

export default Book;
