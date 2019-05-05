
  <Map google={this.props.google} zoom={14}>
   
  <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

  <InfoWindow onClose={this.onInfoWindowClose}>
      <div>
        {/* <h1>{this.state.selectedPlace.name}</h1> */}
      </div>
  </InfoWindow>
</Map>


export default GoogleApiWrapper({
    apiKey: ("AIzaSyA3bUeDZoRccFl_bQuSxbkQNb9PVQ0G_EI")
  })(App)

  import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
