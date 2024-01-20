import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

function Header() {
  const headerMenu = [
    {
      id: 1,
      name: 'Ride',
      icon: '/taxi.jpg',
    },
    {
      id: 2,
      name: 'Package',
      icon: '/package.png',
    },
  ];

  return (
    <div className='p-4 pb-3 pl-10 border-b-[4px] border-gray-200 flex justify-between items-center'>
      <div className='flex gap-24 items-center'>
        <Image src='/logo.png' width={40} height={40} alt='Logo' />
        <div className='flex gap-6 items-center'>
          {headerMenu.map((item) => (
            <div key={item.id} className='flex gap-2 items-center'>
              <Image src={item.icon} width={30} height={30} />
              <h2 className='text-[16px] font-medium'>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-6 items-center'>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;





//map takes a callback funaction as input
// In ReactJs, the maps are used for traversing or displaying the list of similar objects of a component. 