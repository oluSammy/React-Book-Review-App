import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks.component';
import SignedOutLinks from './SignedOutLinks.component';

const Navbar = () => (
    <nav>
        <div class="nav-wrapper purple darken-3">
            <div className="container">
                <Link to = "/" class="brand-logo">Book Review</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <SignedInLinks/>                    
                    <SignedOutLinks/>
                    {/* <li><a href="collapsible.html">Twitter</a></li>
                    <li><a href="collapsible.html">Instagram</a></li> */}
                </ul>
            </div>
        </div>
  </nav>
);

export default Navbar;