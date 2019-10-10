import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Forgotpassword from './components/Forgotpassword/Forgotpassword';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside col-lg-6"></div>
          <div className="App__Form col-lg-6">              
              <Route exact path="/" component={Signup}>
              </Route>
              <Route path="/sign-in" component={Login}>
              </Route>
              <Route path="/forgot-password" component={Forgotpassword}>
              </Route>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;