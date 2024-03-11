import React from "react";

function WhatIBPDHas() {
  return (
    <div className=" w-full h-auto pb-10">
      <div className=" flex flex-col gap-10">
        <div className=" flex gap-5 items-center w-full justify-center">
          <hr className=" border-black border-1 w-2/6" />
          <h1 className=" text-4xl text-[#303030] font-semibold">
            What IBPD has to say
          </h1>
          <hr className=" border-black border-1 w-2/6" />
        </div>
        <div className=" w-full flex justify-center text-gray-500">
          <h1 className=" w-[600px]  text-center italic">
            “IBPD Signifies a commitment to Quality, Excellence, Innovation, and
            Continuous improvement in learning and Professional Development. As
            an integral part of the sector, IBPD plays a pivotal role in
            maintaining and enhancing the overall quality of learning. Join us
            on this transformative journey towards shaping a Brighter career.”
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WhatIBPDHas;
