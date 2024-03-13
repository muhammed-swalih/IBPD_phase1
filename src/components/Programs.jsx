import React from "react";
import programsBg from "../assets/programs.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FcBusinessman } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { TbRibbonHealth } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdManageHistory } from "react-icons/md";
import { ImDatabase } from "react-icons/im";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { SiCyberdefenders } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";
import { TbMessageLanguage } from "react-icons/tb";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { BsArrowRightShort } from "react-icons/bs";

function Programs() {
  return (
    <div className=" w-auto h-auto">
      <div
        className=" w-full h-screen "
        style={{
          backgroundImage: `url(${programsBg})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className=" w-full h-full flex items-center justify-center">
          <div className=" flex flex-col gap-3 items-center text-white">
            <h1 className=" text-6xl font-semibold">Programs</h1>
            <h1 className="w-[650px] text-lg text-center">
              At IBPD, we offer a diverse range of courses designed to cater to
              the evolving needs of professionals across various industries.
            </h1>
          </div>
        </div>
      </div>
      <div className=" px-32 py-10">
        <div className=" flex gap-10 items-start text-sm">
          <div className=" flex flex-col gap-8">
            <h1 className=" w-[1000px] text-justify">
              At IBPD, we offer a diverse range of courses designed to cater to
              the evolving needs of professionals across various industries. Our
              curriculum is meticulously crafted to provide a holistic learning
              experience, incorporating technical expertise, leadership skills,
              and personal development. These advanced courses are tailored for
              professionals seeking to deepen their expertise in specific
              industries. From advanced technical skills to industry-specific
              knowledge, these courses aim to elevate participants to the
              pinnacle of their professions. Here is a glimpse of the courses
              you can expect to find at IBPD.
            </h1>
            <div className=" pl-5 flex flex-col gap-5 text-white">
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <FcBusinessman />
                </h1>
                <h1>Business and management</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <FcAdvertising />
                </h1>
                <h1>Marketing</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <TbRibbonHealth />
                </h1>
                <h1>Health and safety management</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <SiYourtraveldottv />
                </h1>
                <h1>Hospitality and tourism management</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <MdAccountBalance />
                </h1>
                <h1>Accounting and finance</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <GrTechnology />
                </h1>
                <h1>Information technology</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <MdManageHistory />
                </h1>
                <h1>Project management</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <ImDatabase />
                </h1>
                <h1>Data science</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <SiCyberdefenders />
                </h1>
                <h1>Cyber security</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <GiArtificialIntelligence />
                </h1>
                <h1>Artificial intelligence</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <MdModelTraining />
                </h1>
                <h1>Education and training</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <SiHiveBlockchain />
                </h1>
                <h1>Logistics and supply chain management</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <FaGraduationCap />
                </h1>
                <h1>Early years education</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <TbMessageLanguage />
                </h1>
                <h1>Communicative english & language studies</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <PiPersonArmsSpreadFill />
                </h1>
                <h1>Personality studies</h1>
              </div>
              <div className=" rounded-2xl w-[500px] h-14 bg-black flex gap-4 px-5 items-center">
                <h1 className=" text-3xl">
                  <MdHealthAndSafety />
                </h1>
                <h1>Health and wellness</h1>
              </div>
            </div>
            <h1 className=" w-[1000px] text-justify">
              These courses represent just a snapshot of the extensive offerings
              at IBPD. Our commitment is to empower you with the knowledge and
              skills necessary for success in today's dynamic professional
              landscape. Each course is crafted with precision, ensuring a
              transformative learning experience that goes beyond traditional
              boundaries. Our courses aren't just about learning; they're about
              shaping futures, fostering leadership, and empowering you to
              redefine success on your terms. Join IBPD and embark on a journey
              of continuous growth and professional excellence.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Programs;
