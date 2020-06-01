import React from 'react';
import './SignUp.styles.css';

import { auth } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const { email, password } = this.state;
        
        try{
            auth.createUserWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = async event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }

    render(){
        return(
            <div className="row sign-up">
                <div className="container">
                    <div className="col s12 m5 l5 offset-l3">
                        <form className ="purple lighten-5 form" onSubmit={this.handleSubmit}>
                            <h5 className="center  grey-text text-darken-2">Sign UP</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email"  name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field sign-up-btn">
                                <input className="btn deep-purple darken-1 right" type="submit" value="Register"/>                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default SignUp;