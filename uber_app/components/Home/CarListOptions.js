import { CarListData } from '@/utils/CarListData';
import React, { useState } from 'react';
import CarListItem from './CarListItem';

function CarListOptions({distance}) {
  const [activeIndex, setActiveIndex] = useState();  
  return (
    <div>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarListData.map((item, index) => (
        <div className={`cursor-pointer p-2 px-4 rounded-md border-black ${activeIndex === index ? 'border-[3px]' : ''}`} onClick={() => setActiveIndex(index)} key={index}>
          <CarListItem car={item} distance={distance} />
        </div>
      ))}
    </div>
  );
}

export default CarListOptions;
