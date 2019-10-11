import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';

class Forgotpassword extends Component {
    constructor() {
        super();

        this.state = {
            email: ''
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
     
        if(sessionStorage.getItem('userData')){
          return(<Redirect to={'/home'}/>)
        }

        return (
          <React.Fragment>
          <div className="App__Aside col-lg-6"></div>
          <div className="App__Form col-lg-6">
            <div className="FormCenter">
              <div className="FormTitle">        
                <NavLink to="/forgot-password" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Forgot Password</NavLink>
              </div>
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
               
                <div className="FormField col-lg-12 nopadding ">
                   <Link to="/" className="FormField__Link pull-right">  Go Back</Link>
                </div>           

                <div className="FormField text-centered">
                    <button className="FormField__Button ">Submit</button> 
                   
                </div>
              </form>
            </div>
            </div>
          </React.Fragment>
        );
    }
}

export default Forgotpassword;