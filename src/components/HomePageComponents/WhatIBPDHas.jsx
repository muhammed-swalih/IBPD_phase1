import React from "react";

function WhatIBPDHas() {
  return (
    <div className=" w-full h-auto pt-10 md:pt-0 pb-10">
      <div className=" flex flex-col gap-10">
        <div className=" flex gap-5 items-center w-full justify-center md:justify-start">
          <hr className=" border-black border-2 w-[55px] hidden md:block" />
          <div className=" flex flex-col gap-5 ">
            <h1 className=" text-2xl md:text-4xl w-[620px] text-[#303030] font-semibold px-10 md:px-0 text-center md:text-start">
              Our commitments to the partners
            </h1>
            <hr className=" border-gray-300  md:hidden" />
          </div>
          <hr className=" border-black  border-2 w-full hidden md:block" />
        </div>
        <div className=" w-full flex justify-start px-10 md:px-20 text-gray-500">
          <h1 className=" md:w-[1000px]  text-justify md:text-justify">
            At Imperial Board for Professional Development UK, we stand as your
            dedicated partner, advocating for your professional growth, and
            proclaiming that your potential is not just acknowledged—it is
            celebrated.  Your professional journey is our shared narrative, and
            together, we'll redefine the boundaries of success. In the realm of
            IBPD, we believe in the precision of professional development,
            recognizing that success is an amalgamation of strategic learning,
            expert guidance, and a thriving community. It's not merely about
            acquiring skills; it's about crafting a journey that aligns
            seamlessly with your aspirations, ensuring you don't just meet your
            goals but surpass them.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WhatIBPDHas;
