"use client"
import React,{ useState } from 'react';
import Image from 'next/image'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
function InputItem({type}) {
    const [value, setValue] = useState(null);
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src='/Source.jpeg' width={15} height={15}/>
        {/* <input type='text' placeholder={type=='source'?'Pickup Location':'DropOff Location'}
        className='bg-transparent w-full outline-none'/>
         */}
            <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
                value,
                onChange: setValue,
              }}
               />
        
    </div>
  )
}

export default InputItem