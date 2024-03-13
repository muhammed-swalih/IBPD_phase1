import React from "react";
import bg from "../../assets/homebg.webp";
import bookMark from "../../assets/bookmark.png";
import Navbar from "../Navbar";
function LandingPage() {
  return (
    <div className=" md:w-full h-screen bg-black">
      <div
        className="w-full h-screen bg-cover  md:w-full md:h-screen md:bg-cover md:relative "
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className=" w-full h-full absolute ">
          <Navbar />
          <div className="w-full flex flex-col ">
            <div className=" h-screen  flex w-full ">
              <div className=" w-full  mt-36  flex flex-col gap-10 items-start justify-center  md: ">
                <div className=" w-full  md:flex md:justify-start  md:w-auto md:px-10  sm:h-1/3 md:h-72  bg-black bg-opacity-50">
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
                        <h1> illuminate your future</h1>
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
