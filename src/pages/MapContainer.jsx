import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {
  const { venue } = props;
  const mapStyles = {
    width: '90%',
    height: '60%'
    
  };

  return (
    
    <Map 
      google={props.google}
      zoom={14}
      initialCenter={{ lat: 31.55248641510654, lng: 74.380116247289 }}
      
      style={mapStyles} // add style prop
      
    />
    
  );
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBPiMGDKQFc1KJjY0urYa1gPDQ42iBbsZU'
})(MapContainer);
