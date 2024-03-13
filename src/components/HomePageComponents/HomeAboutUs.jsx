import React from "react";
import girl from "../../assets/poori.webp";
import one from "../../assets/webp/container_two~1.webp";
import vector from "../../assets/container_one.webp";
import { useMediaQuery } from "@react-hook/media-query";
function HomeAboutUs() {
  const isTablet = useMediaQuery("(min-width : 640px)and(max-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width : 1024px)");
  const isMobile = useMediaQuery("(max-width: 639px)");

  if (isMobile) {
    return (
      <div className=" w-full px-10 text-white py-10 bg-black">
        <div className=" flex flex-col gap-3">
          <h1 className=" text-2xl font-semibold ">
            Let's delve deeper into the concept of "Global Recognition and
            Prestige”.
          </h1>
          <h1 className=" ">
            we are architects of success, dedicated to sculpting futures that
            transcend expectations. Our commitment is to empower individuals
            with the skills, knowledge, and support they need to not only reach
            their professional aspirations but to exceed them. Our diverse range
            of programs ensures that you receive a customized curriculum that
            aligns with your ambitions.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full h-auto bg-[#EBEBEB] pt-24  pb-20">
      <div className=" flex items-center ">
      
        <div className=" flex items-center justify-start">
          <div className=" w-[700px] h-auto bg-white z-50 ">
            <img className=" w-full h-full object-cover" src={one} alt="" />
          </div>
          <div className=" relative z-50">
            <svg
              className="ml-[-200px] "
              xmlns="http://www.w3.org/2000/svg"
              width="1081"
              height="525"
              viewBox="0 0 1081 525"
              fill="none"
            >
              <path d="M0 524.5L147.5 0H1081L1080.5 524.5H0Z" fill="black" />
            </svg>
            <div className=" absolute bottom-0  w-full h-full flex items-center justify-start text-white ">
              <div className=" flex flex-col gap-5 pl-10">
                <div className=" text-4xl font-semibold tracking-wide ">
                  <h1 className=" w-[600px]">
                    Let's delve deeper into the concept of "Global Recognition
                    and Prestige”.
                  </h1>
                </div>
                <h1 className="  w-[550px] leading-7 text-justify">
                  we are architects of success, dedicated to sculpting futures
                  that transcend expectations. Our commitment is to empower
                  individuals with the skills, knowledge, and support they need
                  to not only reach their professional aspirations but to exceed
                  them. Our diverse range of programs ensures that you receive a
                  customized curriculum that aligns with your ambitions.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
