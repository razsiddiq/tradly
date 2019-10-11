import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Home extends Component {

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

        if(!sessionStorage.getItem('userData')){
            return(<Redirect to={'/sign-in'}/>)
        }

        if(this.state.redirect){
            return (<Redirect to={'/sign-in'}/>)
        }

        return (
            <div>
                <h1>HOME</h1>
                <button className="FormField__Button " onClick={this.logout}>Log Out</button> 
            </div>
        );
    }
}

export default Home;