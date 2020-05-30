import React from 'react';
import './App.css';

//third party components
import { BrowserRouter, Route, Switch } from "react-router-dom";
 

//Components
import Navbar from './components/Navbar/Navbar.component';
import SignIn from './components/Signin/Signin.component';
import SignUp from './components/Signup/SignUp.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>          
          <Route exact path="/signIn" component={SignIn}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
