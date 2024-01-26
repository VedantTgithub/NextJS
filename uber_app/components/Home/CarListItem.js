import React from 'react'

function CarListItem({car,distance}) {
  return (
    <div>
        <div className='flex items-center justify-between overflow-auto '>
            <div className='flex items-center gap-5'>
                <div>
                <h2 className='font-semibold text-[18px]'>{car.name}</h2>
                <p>{car.desc}</p>
                </div>
            </div>

            <h2>Rs{(car.amount*distance).toFixed(2)}</h2>

            </div>

        </div>

   
  )
}

export default CarListItem