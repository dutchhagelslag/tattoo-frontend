import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {GlobalData} from './../../global-data.js';
import React,{useContext } from 'react';
import { Component } from 'react';
import {LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1960px',
  height: '1080px'
};

const center = {
  lat: 40.69452,
  lng:-73.98650
};

class MyComponents extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAiuIYPo_PQ6UbF2nwnA9Ha08nEMuv8t5k"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default React.memo(MyComponents);



