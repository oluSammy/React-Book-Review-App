import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedOutLinks = () => (
    <ul id="nav-mobile" className="right">
        <li><NavLink to = "/signUp" >Sign Up</NavLink ></li>
        <li><NavLink  to = "/signIn">Sign in</NavLink ></li>        
    </ul>
);

export default SignedOutLinks;