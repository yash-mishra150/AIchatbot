"use client";
import React from "react";
import Link from "next/link";
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleclick = (e) => {
    // setTimeout(()=>{router.push("/Login")},500);
    setNavbar(!navbar);
    toast.success('LogedOut');
    
  }
  return (
    <div>
      <ToastContainer />
      <nav className="container w-full z-10">
        <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-5 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-5xl text-white font-Norican">EnlightenAi</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <ImCross />
                  ) : (
                    <FaBars />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`header3 flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="menu3 h-screen md:h-auto items-center justify-center md:flex flex-col md:flex-row ">
                <li className="pb-6 md:pb-0 text-xl text-white py-2 md:px-6 text-center transition-all duration-300 hover:transform hover:scale-110 hover:">
                  <Link href="/About" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 md:pb-0 text-xl text-white py-2 md:px-6 text-center transition-all duration-300 hover:transform hover:scale-110 hover:">
                  <Link href="/Login" onClick={handleclick}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
