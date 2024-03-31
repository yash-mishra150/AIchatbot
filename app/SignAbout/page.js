import React from 'react'
import Link from "next/link";

function page() {
  return (
    <>
    <div className='flex items-center text-white flex-col mt-24'>
      <h1 className=' text-5xl text-center'>About</h1>
      <p className='pt-16 mb-5 text-center w-[650px] flex-col-reverse'>
      This is a Team Project built by Yash, Shreeya and Arpita with Yash as Frontend developer , Arpita as Backend Developer and shreeya as Machine Ai developer.
      </p>
      <p>Version: 1.0.0</p>
      
    </div>
    <Link className='underline text-white ml-[29.5rem] active:text-slate-300' href="/Register">Back</Link>
    </>
  )
}

export default page