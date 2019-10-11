import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email:'',
            password: ''           
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {

      if(sessionStorage.getItem('userData')){
        return(<Redirect to={'/home'}/>)
      }

        return (
          <React.Fragment>
          <div className="App__Aside col-lg-6"></div>
          <div className="App__Form col-lg-6"> 
          <div className="FormCenter">
        	  <div className="FormTitle">        
                <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>
              </div>

            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField col-lg-6 no-left-padding">
                
                <input type="text" id="name" className="FormField__Input" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
              </div>

              <div className="FormField col-lg-6 no-right-padding">
                
                <input type="text" id="lastname" className="FormField__Input" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
              </div>

              <div className="FormField col-lg-12 nopadding">
                
                <input type="text" id="username" className="FormField__Input" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>

              <div className="FormField col-lg-12 nopadding">
                
                <input type="text" id="email" className="FormField__Input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField col-lg-12 nopadding">
               
                <input type="password" id="password" className="FormField__Input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              

              <div className="FormField col-lg-12 nopadding ">
                 <Link to="/forgot-password" className="FormField__Link pull-right">Forgot Password?</Link>
              </div>

              <div className="FormField text-centered">
                  <button className="FormField__Button ">Sign Up</button> 
                  <br>
                  </br>
                  <Link to="/sign-in" className="FormField__Link mt-30">Have Account ? Login</Link>
              </div>
            </form>
          </div>
          </div>
          </React.Fragment>
        );
    }
}
export default SignUpForm;