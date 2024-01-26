import React, { useContext, useEffect, useState } from 'react';
import InputItem from './InputItem';
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';
import CarListOptions from './CarListOptions';

function SearchSection() {
  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (source && destination) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw&libraries=geometry`;
      script.async = true;
      script.onload = () => {
        calculateDistance();
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [source, destination]);

  const calculateDistance = () => {
    const distInMeters = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: source.lat, lng: source.lng },
      { lat: destination.lat, lng: destination.lng }
    );
    const distInKm = distInMeters / 1000; // Convert meters to kilometers
    setDistance(distInKm);
  };

  return (
    <div>
    <div className='p-2 md:pd-6 border-[2px] rounded-xl'>
      <p className='text-[20px] font-bold'>Get a ride</p>
      <InputItem type='source' />
      <InputItem type='destination' />
      <button
        onClick={calculateDistance}
        className='p-3 bg-black w-full mt-5 text-white rounded-lg'
      >
        Search
      </button>
      {distance !== null && (
        <p className='mt-3'>
          Distance between source and destination: {distance.toFixed(2)} kilometers
        </p>
      )}

      </div>
      {distance?<CarListOptions distance={distance}/>:null}
    </div>
  );
}

export default SearchSection;
