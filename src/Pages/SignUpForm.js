import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            lastname: '',
            password: '',
            firstname: '',
            username: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
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
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField col-lg-6 nopadding">
                
                <input type="text" id="name" className="FormField__Input" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
              </div>

              <div className="FormField col-lg-6 nopadding">
                
                <input type="text" id="lastname" className="FormField__Input" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
              </div>

              <div className="FormField col-lg-12 nopadding">
                
                <input type="text" id="username" className="FormField__Input100" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>


              <div className="FormField col-lg-12 nopadding">
               
                <input type="password" id="password" className="FormField__Input100" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              

              <div className="FormField col-lg-6 nopadding">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="/" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;