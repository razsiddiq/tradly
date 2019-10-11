import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Forgotpassword from './components/Forgotpassword/Forgotpassword';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">                      
              <Route exact path="/" component={Signup}>
              </Route>
              <Route path="/sign-in" component={Login}>
              </Route>
              <Route path="/forgot-password" component={Forgotpassword}>
              </Route>
              <Route path="/home" component={Home}>
              </Route>
        </div>
      </Router>
    );
  }
}

export default App;gk