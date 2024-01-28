import { CarListData } from '@/utils/CarListData';
import React, { useState } from 'react';
import CarListItem from './CarListItem';

function CarListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState(null); // Initialize activeIndex with null
  const [selectedCar, setSelectedCar] = useState(null); // Initialize selectedCar with null

  const handleCarItemClick = (index, item) => {
    setActiveIndex(index);
    setSelectedCar(item);
  };

  return (
    <div>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarListData.map((item, index) => (
        <div
          className={`cursor-pointer p-2 px-4 rounded-md border-black ${
            activeIndex === index ? 'border-[3px]' : ''
          }`}
          onClick={() => handleCarItemClick(index, item)} // Call handleCarItemClick on click
          key={index}
        >
          <CarListItem car={item} distance={distance} />
        </div>
      ))}
      {selectedCar && ( // Render payment section only if a car is selected
        <div className='flex justify-between fixed bottom-5 bg-white p-3 shadow-xl w-full md:w-[30%] border-[1px] items-center'>
          <h2>Make Payment for {selectedCar.name}</h2>
          <button className='p-3 bg-black text-white rounded-lg text-center'>
            Request UberX
          </button>
        </div>
      )}
    </div>
  );
}

export default CarListOptions;
