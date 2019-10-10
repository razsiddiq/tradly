import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignInForm from './Pages/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside col-lg-6"></div>
          <div className="App__Form col-lg-6">              
              <Route exact path="/" component={Login}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;