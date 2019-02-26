import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class Map extends React.Component {
  static defaultProps = {
    center: {lat: random(-90, 90), lng: random(-180, 180)},
    zoom: 11
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat= random(-90, 90) 
          lng= random(-180, 180) 
          text={'Main office'} 
        />
      </GoogleMapReact>
    );
  }
}


ReactDOM.render(
  <div style={{width: '100%', height: '400px'}}>
    <Map/>
  </div>,
  document.getElementById('main')
);
