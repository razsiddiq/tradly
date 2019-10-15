import React, { Component } from 'react';
import './Platform.css';

class Platform extends Component {
   
    componentWillMount(){
    
    }

    render() {
      

        return (
         <div className="container platform">
            <h1>Choose Your Platform</h1>
          <div className="row text-center">
            <div className="col-lg-4">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
              <h2>Heading</h2>
              
            </div>
            <div className="col-lg-4">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
              <h2>Heading</h2>
             
            </div>
            <div className="col-lg-4">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
              <h2>Heading</h2>
             
            </div>
          </div>
         </div>  
        );
    }
}

export default Platform;