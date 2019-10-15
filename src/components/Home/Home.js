import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header'
import Platform from '../Platform/Platform'
class Home extends Component {

    constructor(){
        super();
        this.state = {
            redirect: false
        };       
    }

   
    componentWillMount(){
        if(sessionStorage.getItem('userData')){
            console.log('Success');
        }else{
            this.setState({redirect:true});
        }
    }

    render() { 
        if(this.state.redirect){
            return (<Redirect to={'/sign-in'}/>)
        }

        return (
            <div>
                <Header/>
                <Platform/>               
            </div>
        );
    }
}

export default Home;