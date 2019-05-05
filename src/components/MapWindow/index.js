//Import both react and the stylesheet from the same folder
import React, { Component } from "react";
import "./style.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: "600px",
    height: "423px",
}

// const sat = google.maps.MapTypeId.SATELLITE;
// ================================================================
//         MAPWINDOW  COMPONENT
// ================================================================

class MapWindow extends Component {
    render(){
        return (
            <div className="map">
              <Map
               google={this.props.google}
               zoom={14}
               style={style}
               mapTypeId= "satellite"
               initialCenter={{
                lat: 33.7490,
                lng: -84.3880,
              }}>
       
       <Marker onClick={this.onMarkerClick}
               name={'Current location'} />
     
       <InfoWindow onClose={this.onInfoWindowClose}>
           <div>
             {/* <h1>{this.state.selectedPlace.name}</h1> */}
           </div>
       </InfoWindow>
        </Map>
            </div>
        );
    }
    
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyA3bUeDZoRccFl_bQuSxbkQNb9PVQ0G_EI")
  })(MapWindow)