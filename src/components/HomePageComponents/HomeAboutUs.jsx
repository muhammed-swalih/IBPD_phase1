import React from "react";
import girl from "../../assets/poori.webp";
function HomeAboutUs() {
  return (
    <div className=" w-full h-auto bg-[#EBEBEB] pt-32 pb-20">
      <div className=" w-full flex justify-end">
        <div className=" relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1200"
            height="400"
            viewBox="0 0 1376 446"
            fill="none"
          >
            <path d="M62.5455 0H1376V446H0L62.5455 0Z" fill="black" />
          </svg>

          <div className=" w-full bottom-0 absolute text-white  h-full flex items-center justify-between pl-32 ">
            <div>
              <h1>About us</h1>
              <hr className=" border-white w-72" />
              <div className=" flex flex-col gap-5">
                <div className=" mt-3 text-4xl">
                  <h1 className="  font-semibold">The place where</h1>
                  <h1 className="  font-semibold">you can achieve</h1>
                </div>
                <div>
                  <h1 className=" w-[600px] ">
                    Choosing IBPD is a strategic decision that goes beyond
                    obtaining a seal of recognition; it signifies a commitment
                    to excellence, innovation, and continuous improvement in
                    learning and professional development. we are proud to be at
                    the forefront of quality programs that meet rigorous
                    standards of professional excellence.
                  </h1>
                </div>
                <h1 className=" underline">Read more</h1>
              </div>
            </div>
            <div className=" ">
              <img
                src={girl}
                alt=""
                width={500}
                className=" mt-[-155px] pr-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
