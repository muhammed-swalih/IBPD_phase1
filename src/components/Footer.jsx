import React from "react";
import LOGO from "../assets/footer_logo.webp";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className=" w-full h-auto pt-20 pb-5 flex px-20 justify-center gap-20 bg-black">
      <div className=" w-1/2 h-full flex flex-col justify-center items-start ">
        <div className=" w-80 h-52">
          <img src={LOGO} width={500} alt="" />
        </div>
        <div>
          <h1 className=" text-white text-sm">
            Copyright ©2024 Imperial Board for Professional Development UK
          </h1>
        </div>
      </div>
      <div className=" flex items-start gap-10 justify-center text-white w-1/2">
        <div className=" flex flex-col gap-2">
          <h1 className=" font-semibold">Menu</h1>
          <div>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Partners</h1>
            <h1>Programs</h1>
          </div>
        </div>
        <div className="flex gap-5 items-start">
          <div className=" w-[1px] h-[150px] bg-white"></div>
          <div className=" flex flex-col gap-2">
            <h1>Address</h1>
            <div className=" flex gap-3 items-start">
              <h1>
                <MdLocationOn />
              </h1>
              <h1 className=" text-sm">
                Office 128, City Road, London, EC1V 2NX, UNITED KINGDOM
              </h1>
            </div>
            <div>
              <h1>Contact</h1>
              <div className=" flex gap-3 items-center">
                <h1>
                  <IoMail />
                </h1>
                <h1>Info@ibpd.org</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
