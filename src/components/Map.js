import { Map, GoogleApiWrapper } from 'google-maps-react';

render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAiuIYPo_PQ6UbF2nwnA9Ha08nEMuv8t5k'
})(MapContainer);

const mapStyles = {
  width: '100%',
  height: '100%',
};
