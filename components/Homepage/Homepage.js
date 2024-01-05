import React from 'react'
import Image from 'next/image'
import arrow from './Circlearrow.svg'
import DisplayCard from '../DisplayCard/displayCard'

function Homepage() {
  return (
    <div className='flex justify-center'>
        <DisplayCard />
        <div className='flex justify-center h-36 w-[700px] absolute top-[600px] bg-black rounded-xl border-solid border-2 border-gray-600'>
            <input placeholder="Ask Anything..." className='h-[55px] w-[650px] rounded mt-10 text-white bg-black px-6 border-solid border-2 border-gray-600' />
            <Image src={arrow} alt='ImageNA' className='absolute top-[3.3rem] right-10' />   
        </div>
    </div>
  )
}

export default Homepage
