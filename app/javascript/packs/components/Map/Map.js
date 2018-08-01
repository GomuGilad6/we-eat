import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends React.Component {
  _renderInfoWindow = (infoWindow, openInfoWindow) => (
    <InfoWindow
      onCloseClick={openInfoWindow}
    >
      {infoWindow}
    </InfoWindow>
  );

  _renderMarkers = () => this.props.locations.map(location => {
    const { coordinates, icon, infoWindow, openInfoWindow, markerOpen } = location;
    return (
      <Marker
        key={`${coordinates.lat}-${coordinates.lng}`}
        position={coordinates}
        animation={google.maps.Animation.BOUNCE} /** DROP */
        onMouseOver={openInfoWindow}
        onMouseOut={openInfoWindow}
        onClick={openInfoWindow}
      >
        {markerOpen && this._renderInfoWindow(infoWindow, openInfoWindow)}
      </Marker>
    );
  });

  render() {
    return (
      <GoogleMap
        defaultZoom={15}
        center={this.props.center}
      >
        {this._renderMarkers()}
      </GoogleMap>
    );
  }
};

Map.propTypes = {
  locations: PropTypes.array,
  center: PropTypes.object
};

Map.defaultProps = {
  locations: [],
  center: {}
};

export default Map;
