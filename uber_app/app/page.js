"use client"
import GoogleMapSection from '@/components/Home/GoogleMapSection'
import SearchSection from '@/components/Home/SearchSection'
import { DestinationContext } from '@/context/DestinationContext'
import { SourceContext } from '/context/SourceContext'
 // Corrected the import
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useState } from 'react'
import { LoadScript } from '@react-google-maps/api'

export default function Home() {
  const [source, setSource] = useState([]) // Corrected variable name
  const [destination, setDestination] = useState([])

  return (
    <SourceContext.Provider value={{ source, setSource }}> {/* Added missing closing curly brace */}
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <LoadScript libraries={['places']} googleMapsApiKey={"AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw"}>
        <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div>
            <SearchSection />
          </div>
          <div className='col-span-2'>
            <GoogleMapSection />
          </div>
        </div>
        </LoadScript>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  )
}
