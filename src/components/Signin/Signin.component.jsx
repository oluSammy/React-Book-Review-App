import React from 'react';
import './SignIn.styles.css';
import { auth } from '../../firebase/firebase.utils';
import { Redirect } from 'react-router-dom'; 

class SignIn extends React.Component {
    
    state = {
        email: '',
        password: '',
        redirect: null
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});

        const { email, password } = this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: '', redirect: '/'});
        } catch (error) {
            console.log(error);
        }
    }


    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div className="row sign-in">
                <div className="container">
                    <div className="col s12 m5 l5 offset-l3">
                        <form className ="purple lighten-5 form" onSubmit={this.handleSubmit}>
                            <h5 className="center  grey-text text-darken-2">Sign In</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email"  name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="input-field sign-in-btn">
                                <input className="btn deep-purple darken-1 right" type="submit" value="Sign In"/>      
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;