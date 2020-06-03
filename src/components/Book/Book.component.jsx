import React from 'react';
import './Book.styles.css';
import { withRouter } from 'react-router-dom';



const Book = ({book: { data: {title, imgUrl, author, likes}, id}, history}) => (        
        <div className="col s6 m4 l3 book" onClick={()=> history.push(`/book/${id}`)}>
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
);

export default withRouter(Book);
