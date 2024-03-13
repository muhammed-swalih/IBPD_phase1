import React from "react";
import bg from "../../assets/webp/home_bg.webp";
import LOGO from "../../assets/IBPD_LOGO.webp";
import bookMark from "../../assets/bookmark.png";
import Navbar from "../Navbar";
function LandingPage() {
  return (
    <div className=" md:w-full h-screen bg-black">
      <div
        className="w-full h-screen bg-cover  md:w-full md:h-full md:relative "
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className=" w-full h-full absolute ">
          <div className="w-full ">
            <Navbar />
            <div className=" h-screen  flex w-full items-center">
              <div className=" w-full h-[610px]  flex flex-col gap-10 items-start justify-end md:justify-center ">
                <div className=" w-full md:flex md:justify-start md:w-auto md:px-10 md:h-72 bg-black bg-opacity-50">
                  <div className=" flex flex-col gap-2 text-white">
                    <img
                      className="hidden md:block md:drop-shadow-lg"
                      src={bookMark}
                      width={30}
                      alt=""
                    />
                    <div className=" gap-2 px-10 md:px-0 pb-10 flex flex-col md:gap-5 py-5 md:py-0">
                      <div className=" flex md:text-left flex-col text-2xl md:text-4xl md:tracking-wider md:leading-[45px] font-semibold">
                        <h1>Ignite your career,</h1>
                        <h1> illuminate your future.</h1>
                      </div>
                      <h1 className=" w-[320px] text-sm md:text-base md:w-[500px] md:text-justify ">
                        Embark on a transformative experience with IBPD where
                        expertise meets aspiration, crafting futures of
                        unparalleled success. Your success story starts here.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
