import React from 'react';
import './App.css';

//third party components
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth } from './firebase/firebase.utils';
 

//Components
import Navbar from './components/Navbar/Navbar.component'
import SignIn from './components/Signin/Signin.component'
import SignUp from './components/Signup/SignUp.component'
import BookContainer from './components/BookContainer/BookContainer.component'
import BookDetail from './components/BookDetail/bookDetail.components'

class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <BrowserRouter>
          <Navbar currentUser={this.state.currentUser}/>
          <Switch>          
            <Route exact path="/" component={BookContainer}></Route>
            <Route  path="/signIn" component={SignIn}></Route>
            <Route  path="/signUp" component={SignUp}></Route>
            <Route  path="/book/:id" component={BookDetail}></Route>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
