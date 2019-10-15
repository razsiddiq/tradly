import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import { PostData} from '../../services/PostData';
import './Header.css';
import logo from '../../images/Tradly-Logo.png'; // with import
class Header extends Component {
   

	constructor(){
        super();
        this.state = {
            redirect: false
        };

        this.logout = this.logout.bind(this);        
    }

    logout() {
        sessionStorage.setItem('userData','');
        sessionStorage.clear();
        this.setState({redirect:true});
    }

    render() {

    	if(this.state.redirect){
            return (<Redirect to={'/sign-in'}/>)
        }

        return (
          <nav className="navbar navbar-static-top">
		      <div className="container">
		        <div className="navbar-header">
		          
		          <a className="navbar-brand" href="#"><img src={logo} /></a>
		        </div>
		        <div id="navbar" className="navbar-collapse">
		         
		          <ul className="nav navbar-nav navbar-right">
		            <li><a href="#" onClick={this.logout}>Log Out</a></li>
		          </ul>
		        </div>
		      </div>
    		</nav>
        );
    }
}

export default Header;