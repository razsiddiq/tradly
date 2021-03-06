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
            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Web Apps</h2>
              
            </div>
            </div>
            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Backend Dashboard</h2>
              
            </div>
            </div>
            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Android</h2>
              
            </div>
            </div>
            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>IOS</h2>
              
            </div>
            </div>

            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Desktop Apps</h2>
              
            </div>
            </div>
            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Wearable</h2>
              
            </div>
            </div>
            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>TV</h2>
              
            </div>
            </div>
            <div className="col-lg-3">
            <div className="background-grey">
              <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>IOT</h2>
              
            </div>
            </div>
          </div>
         </div>  
        );
    }
}

export default Platform;