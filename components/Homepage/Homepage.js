import React from 'react'
import Image from 'next/image'
import { FaArrowUpFromBracket } from "react-icons/fa6";
import DisplayCard from '../DisplayCard/displayCard'

function Homepage() {
  return (
    <>
    <div className='flex sm:justify-center'>
      <section>
        <DisplayCard />
        {/* <div className='flex justify-center h-36 w-[700px] mt-4 bg-black rounded-xl border-solid border-2 border-gray-600'> */}
        {/* <input placeholder="Ask Anything..." className='h-[55px] w-[43.5rem] rounded-2xl mt-10 text-white bg-black px-6 border-solid border-2 border-gray-600' /> */}
        <div class="searchBox flex max-w-200 items-center justify-between gap-2 relative rounded-[50px]">
          <input class="searchInput w-99 ml-1 sm:ml-0 sm:w-200 h-13 p-3 rounded-2xl outline-none border bg-[rgba(19,19,19)] text-white active:bg-black " type="text" name="" placeholder="Message EnlightenAi..." />
          <button class=" searchButton text-[white] sm:absolute w-[50px] h-[50px] inline-block transition-all duration-300 ease-[cubic-bezier(.23,1,0.32,1)] rounded-[50%] border-0 sm:right-2 hover:text-white hover:bg-[#1A1A1A] hover:shadow-[rgba(0,0,0,0.5)_0_10px_20px] hover:translate-y-[-3px] active:shadow-none active:translate-y-0" href="#">
            <FaArrowUpFromBracket fill='white' size={20} className='ml-3.5' />
          </button>
        </div>
        {/* </div> */}
      </section>
    </div>
    <p className='hidden sm:block text-xs text-center text-white mt-1'>EnlightenAi could be wrong. Consider checking important information </p>
    </>
  )
}

export default Homepage
