"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [post, setpost] = useState({
    Name: "",
    Email: "",
    PhoneNo: null,
    Password: "",
  });
  const [responce, setresponce] = useState("");
  async function fetchData() {
      // Make the API call
      const response = await axios.post('http://localhost:8080/api/Register', post);


      // Process the response
      // console.log('API Response:', response.data);
      // setresponce(response.data)
      if(response.data){setresponce("sucess")}
      // Your logic to handle the response
  
  }



  const handleSubmit = async (e) => {
    try {
      if (!email || !password) return toast.error("Please fill all fields!");
      fetchData();
      if(responce === "sucess") return toast.success("Registration SucessFull!!");
      toast.errort("Error in Registration! Please Try Again.");
      reload();
      //   if (responce.length == 0)
      //     return toast.error("Invalid userid or password");
      //   toast.success("Logged in sucessfully!!");
    } catch (err) {
      toast.error("Something went wrong! Please try again later.");
    }
  };
  const handleChangeEmail = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
    setEmail(e.target.value);
  };
  const handleChangePhoneno = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
    setPhoneno(e.target.value);
  };
  const handleChangePassword = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
    setPassword(e.target.value);
  };
  const handleChangeName = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
    setName(e.target.value);
  };

  return (
    <div className="flex justify-center mt-10 px-16 py-16">
      <ToastContainer />
      <div className="card h-[25rem] transition-all duration-[0.2s] relative cursor-pointer">
        <div className="card-inner w-[20rem] sm:w-[30rem] md:w-[45rem] p-5 px-28 shadow-[0_0_10px_rgba(0,0,0,0.25)] backdrop-blur-[10px] rounded-3xl bg-[#ffffff0d]">
          <section className="font-Norican font-medium text-[2.2rem] mr-10 w-28 sm:w-auto md:text-5xl sm:text-center text-white">
            Sign Up
          </section>
          <form
            action={handleSubmit}
            className="flex flex-col items-center mt-9 sm:mt-10 gap-2.5 transition-[0.4s] duration-[ease-in-out] pb-[0.4em] px-[2em] rounded-[25px]"
          >
            <div className="flex mb-2">
              <FaUser className="absolute top-[118px] ml-3 h-[1.1em] w-[1.1em] fill-[white]" />
              <input
                name="Name"
                autoComplete="off"
                id="name"
                value={name}
                placeholder="Name"
                onChange={handleChangeName}
                className="input-field h-10 w-56 sm:w-60 md:w-[360px] text-[#d3d3d3] border-2 border-solid border-[#d3d3d3] pl-10 rounded-3xl bg-[#0000] font-poppins outline-none"
                type="text"
              />
            </div>
            <div className="flex">
              <svg
                className="absolute top-[175px] ml-3 h-[1.5em] w-[1.5em] fill-[white]"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                name="Email"
                autoComplete="off"
                id="email"
                value={email}
                type="email"
                onChange={handleChangeEmail}
                placeholder="Email"
                className="input-field h-10 w-56 sm:w-60 md:w-[360px] text-[#d3d3d3] border-2 border-solid border-[#d3d3d3] pl-9 rounded-3xl bg-[#0000] font-poppins outline-none"
              />
            </div>
            <div className="flex mt-2">
              <FaPhone className="absolute top-[235px] ml-4 h-[1em] w-[1em] fill-[white]" />
              <input
                name="PhoneNo"
                autoComplete="off"
                id="phoneno"
                value={phoneno}
                placeholder="Phone Number"
                onChange={handleChangePhoneno}
                className="input-field h-10 w-56 sm:w-60 md:w-[360px] text-[#d3d3d3] border-2 border-solid border-[#d3d3d3] pl-10 rounded-3xl bg-[#0000] font-poppins outline-none"
                type="Password"
              />
            </div>
            <div className="flex mt-2">
              <RiLockPasswordFill className="absolute top-[290px] ml-4 h-[1.3em] w-[1.3em] fill-[white]" />
              <input
                name="Password"
                autoComplete="off"
                id="password"
                value={password}
                placeholder="Password"
                onChange={handleChangePassword}
                className="input-field h-10 w-56 sm:w-60 md:w-[360px] text-[#d3d3d3] border-2 border-solid border-[#d3d3d3] pl-10 rounded-3xl bg-[#0000] font-poppins outline-none"
                type="Password"
              />
            </div>
            <section>
              <ul className="flex gap-0 sm:gap-28 md:gap-36 justify-around text-white font-poppins w-[20rem] sm:w-96">
                <li>
                  <Link className="active:text-slate-300 text-right" href="/Login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="active:text-slate-300 text-right" href="/SignAbout">
                    About us
                  </Link>
                </li>
              </ul>
            </section>
            <button className="cursor-pointer my-2 w-[7em] h-10 font-poppins text-lg border-solid border-2 border-slate-400 rounded-3xl active:shadow-none hover:shadow-lg duration-300 transition hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500">
              <span className=" bg-black text-white rounded-3xl p-[4px] pb-[5px] px-[26.5px]">
                Sign up
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
