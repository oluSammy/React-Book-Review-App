import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';


const SignedInLinks = () => (
    <li><NavLink to = "/" onClick={() => auth.signOut()}>log out</NavLink></li>
);


export default SignedInLinks;