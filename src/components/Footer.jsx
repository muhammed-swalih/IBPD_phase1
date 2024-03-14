import React from "react";
import LOGO from "../assets/footer_logo.webp";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { useMediaQuery } from "@react-hook/media-query";

function Footer() {
  const isMobile = useMediaQuery("(max-width: 639px)");

  if (isMobile) {
    return (
      <div className=" w-full h-auto px-5 flex flex-col gap-5 py-5 bg-black text-white">
        <div className=" w-full flex justify-center ">
          <img className=" " src={LOGO} alt="" />
        </div>
        <hr />
        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-1">
            <h1 className="font-semibold">Address</h1>
            <div className=" flex items-start gap-2">
              <h1 className=" text-xl">
                <MdLocationOn />
              </h1>
              <h1>Office 128, City Road, London, EC1V 2NX, UNITED KINGDOM</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <h1>Contact us</h1>
            <div className=" flex gap-2 items-center">
              <h1 className=" text-xl">
                <IoMail />
              </h1>
              <h1>info@ibpd.org</h1>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1 className=" text-xs w-full justify-center text-center">
            Copyright ©2024 Imperial Board for Professional Development UK
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full h-auto pt-10 pb-5 flex px-32 justify-center gap-20 bg-black">
      <div className=" w-1/2 h-full flex flex-col justify-center items-start ">
        <div className=" w-80 h-36">
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
                Office 128, City Road, London,
                <br />
                EC1V 2NX, UNITED KINGDOM
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
