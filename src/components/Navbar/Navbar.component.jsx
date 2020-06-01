import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks.component';
import SignedOutLinks from './SignedOutLinks.component';

const Navbar = ({ currentUser }) => (
    <nav>
        <div className="nav-wrapper purple darken-3">
            <div className="container">
                <Link to = "/" className="brand-logo">Book Review</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {
                        currentUser ? 
                        <SignedInLinks/> 
                        :
                        <SignedOutLinks/>                    
                    }
                </ul>
            </div>
        </div>
  </nav>
);

export default Navbar;