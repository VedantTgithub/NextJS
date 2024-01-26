import React, { useEffect, useState, useCallback } from 'react';
import { DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function GoogleMapSection({ source, destination }) {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 26.7921605, lng: 82.1997954 });

  useEffect(() => {
    if (source && source.lat && source.lng) {
      setCenter({
        lat: source.lat,
        lng: source.lng
      });
    }
    if (source && destination && source.lat && source.lng && destination.lat && destination.lng) {
      directionRoute();
    }
  }, [source, destination]);

  const directionRoute = () => {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: { lat: source.lat, lng: source.lng },
      destination: { lat: destination.lat, lng: destination.lng },
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        // Handle the direction result here
      } else {
        console.error("Error:", status);
      }
    });
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpsxwudHlNw"
  });

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  useEffect(() => {
    console.log("Source:", source);
    console.log("Destination:", destination);
  }, [source, destination]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={map=>setMap(map)}
      
    >
      {source && source.lat && source.lng && (
        <Marker position={{ lat: source.lat, lng: source.lng }} />
      )}
      {destination && destination.lat && destination.lng && (
        <Marker position={{ lat: destination.lat, lng: destination.lng }} />
      )}
      {/* Render DirectionsRenderer here */}
    </GoogleMap>
  ) : (
    <div>Loading map...</div>
  );
}

export default GoogleMapSection;
