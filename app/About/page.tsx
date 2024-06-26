import React from 'react'
import Navbar from 'C:/Users/yashm/OneDrive/Documents/projects/teamproject/components/Navbar/Navbar.js'

function page() {
  return (
    <>
    <Navbar />
    <div className='flex items-center text-white flex-col mt-10'>
      <h1 className=' text-6xl text-center'>About</h1>
      <p className='pt-16 mb-5 text-center w-[650px] flex-col-reverse'>
      This is a Team Project built by Yash, Shreeya and Arpita with Yash as Frontend developer , Arpita as Backend Developer and shreeya as Machine Ai developer.
      </p>
      <p>Version: 1.0.0</p>
    </div>
    </>
  )
}

export default page
