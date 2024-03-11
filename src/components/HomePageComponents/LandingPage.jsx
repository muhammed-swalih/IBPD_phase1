import React from "react";
import bg from "../../assets/BG.webp";
import LOGO from "../../assets/IBPD_LOGO.webp";
import bookMark from "../../assets/bookmark.png";
function LandingPage() {
  return (
    <div className=" w-full h-screen bg-black">
      <div
        className="w-full h-full relative"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className=" w-full h-full absolute ">
          <div className=" ">
            <div className=" w-full h-full px-10 flex  justify-between">
              <div className=" w-40 h-40 bg-black bg-opacity-75 flex items-center justify-center">
                <img src={LOGO} alt="" className="w-full h-full bg-cover" />
              </div>
              <div className=" py-10">
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
                      <span>Home</span>
                      <span>About us</span>
                      <span>Partners</span>
                      <span>Programs</span>
                      <span>Payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-[610px]  flex flex-col gap-10 items-start justify-center ">
              <div className="  flex justify-start w-auto px-10 h-72 bg-black bg-opacity-50">
                <div className=" flex flex-col gap-2 text-white">
                  <img
                    className=" drop-shadow-lg"
                    src={bookMark}
                    width={30}
                    alt=""
                  />
                  <div className=" pb-10 flex flex-col gap-5">
                    <div className=" flex flex-col text-4xl tracking-wider leading-[45px] font-semibold">
                      <h1>Ignite your career,</h1>
                      <h1> illuminate your future.</h1>
                    </div>
                    <h1 className=" w-[460px] ">
                      IBPD Signifies a commitment to Quality, Excellence,
                      Innovation, and Continuous improvement in Education. As an
                      integral part of the education sector,{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full  flex justify-end mt-[-120px]  ">
              <div className=" relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1000"
                  height="170"
                  viewBox="0 0 1061 177"
                  fill="none"
                >
                  <g filter="url(#filter0_d_102_240)">
                    <path
                      d="M50.0059 3.65967C50.6078 1.49662 52.5777 0 54.8229 0H1133.93C1136.72 0 1138.97 2.28334 1138.93 5.07302L1136.6 164.073C1136.56 166.806 1134.34 169 1131.6 169H4L50.0059 3.65967Z"
                      fill="#F2F2F2"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_102_240"
                      x="0"
                      y="0"
                      width="1142.93"
                      height="150"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_102_240"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_102_240"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="absolute bottom-0 top-0  w-full   text-black ">
                  <div className=" flex w-full h-36 items-center justify-center gap-10">
                    <div className=" flex flex-col font-semibold">
                      <h1 className=" text-3xl">Our Simple</h1>
                      <h1 className=" text-3xl">Approach</h1>
                    </div>
                    <div>
                      <h1 className=" w-[400px] ">
                        IBPD Signifies a commitment to Quality, Excellence,
                        Innovation, and Continuous improvement in Education. As
                        an integral part of the education sector,{" "}
                      </h1>
                    </div>
                    <h1 className=" text-6xl">45k</h1>
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
