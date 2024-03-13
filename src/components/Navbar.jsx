import React from "react";
import LOGO from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const navigate = useNavigate();
  const navToAbout = () => {
    navigate("/about");
  };

  const navToPartner = () => {
    navigate("/partner");
  };
  const navToHome = () => {
    navigate("/");
  };

  const navToPrograms = () => {
    navigate("/programs");
  };
  return (
    <div className=" w-full md:w-full md:h-full md:absolute ">
      <div className=" ">
        <div className=" bg-black flex items-center h-36 justify-between px-5 md:w-full md:bg-transparent md:h-full md:px-10 md:flex  md:justify-between">
          <div
            onClick={navToHome}
            className=" w-32   md:w-40 md:h-44 bg-black md:bg-opacity-75 md:flex md:items-center md:justify-center drop-shadow-lg"
          >
            <img src={LOGO} alt="" className="w-52 h-52 object-cover" />
          </div>
          <div className=" text-white md:hidden ">
            <h1 className=" text-5xl">
              <IoMenu />
            </h1>
          </div>
          <div className="hidden md:py-10 md:block">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="657"
                height="60"
                viewBox="0 0 657 71"
                fill="none"
              >
                <path
                  d="M42.1844 0H657V71H0L42.1844 0Z"
                  fill="black"
                  fillOpacity="0.83"
                />
              </svg>
              <div className="absolute bottom-0  w-full h-full flex items-center justify-center text-white">
                <div className=" flex gap-8 items-center">
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToHome}
                  >
                    Home
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToAbout}
                  >
                    About us
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToPartner}
                  >
                    Partners
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToPrograms}
                  >
                    Programs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
