import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
//import { PostData} from '../../services/PostData';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            redirect: false
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
        sessionStorage.setItem('userData','responseJSON');
        this.setState({redirect : true});
        // PostData('login', this.state).then((result) => {
        //   let responseJSON = result;
        //   if(responseJSON.userData){
        //     sessionStorage.setItem('userData',responseJSON);
        //     this.setState({redirect : true});
        //   }else{
        //     console.log('Login Error');
        //   }
        // });
        // console.log('The form was submitted with the following data:');
        // console.log(this.state);
    }

    render() {

        if(this.state.redirect){
          return(<Redirect to={'/home'}/>)
        }

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
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="FormField col-lg-12 nopadding ">
                   <Link to="/forgot-password" className="FormField__Link pull-right">Forgot Password?</Link>
                </div>           

                <div className="FormField text-centered">
                    <button className="FormField__Button ">Sign In</button> 
                    <br>
                    </br>
                    <Link to="/" className="FormField__Link mt-30">Create an account</Link>
                </div>
              </form>
            </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Login;