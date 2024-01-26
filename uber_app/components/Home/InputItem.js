import React, { useContext } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';

function InputItem({ type }) {
  const { setSource } = useContext(SourceContext);
  const { setDestination } = useContext(DestinationContext);

  const getLatandLong = (place, type) => {
    if (!place || !place.value) {
      return; // Add a null check to prevent accessing properties of undefined/null
    }
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({ placeId }, (place, status) => {
      if (status === 'OK' && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        
        if (type === 'source') {
          setSource({
            lat,
            lng,
            name: place.formatted_address,
            label: place.name
          });
        } else if (type === 'destination') {
          setDestination({
            lat,
            lng,
            name: place.formatted_address,
            label: place.name
          });
        }
      }
    });
  };

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw"
        selectProps={{
          onChange: (place) => getLatandLong(place, type),
          placeholder: type === 'source' ? 'Pickup Location' : 'Dropoff Location',
          isClearable: true,
          className: 'w-full',
          components: {
            DropdownIndicator: false
          }
        }}
      />
    </div>
  );
}

export default InputItem;
