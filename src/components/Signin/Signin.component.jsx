import React from 'react';
import './SignIn.styles.css';

const SignIn = () => (
    <div className="row sign-in">
        <div className="container">
            <div className="col s12 m5 l5 offset-l3">
                <form className ="purple lighten-5 form">
                    <h5 className="center  grey-text text-darken-2">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password"  id="password"/>
                    </div>
                    <div className="input-field sign-in-btn">
                        <button className="btn deep-purple darken-1 right">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default SignIn;