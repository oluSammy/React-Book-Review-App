import React from 'react';
import './App.css';

//third party components
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
 

//Components
import Navbar from './components/Navbar/Navbar.component';
import SignIn from './components/Signin/Signin.component';
import SignUp from './components/Signup/SignUp.component';
import BookContainer from './components/BookContainer/BookContainer.component';
import BookDetail from './components/BookDetail/bookDetail.components';

//Redux Actions
import { setCurrentUser } from './Redux/user/user.action';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.setCurrentUser(user)
    })
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
          <Navbar />
          <Switch>          
            <Route exact path="/" component={BookContainer}/>
            <Route  exact path="/signIn" 
              render={() => this.props.currentUser ? 
              (<Redirect to="/"/>)  : 
              <SignIn/>}
            />
            <Route  path="/signUp" component={SignUp}/>
            <Route  path="/book/:id" component={BookDetail}/>
          </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
