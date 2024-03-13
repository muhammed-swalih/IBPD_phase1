import React from "react";

function Global() {
  return (
    <div className=" w-full  flex flex-col gap-10 mt-10 pb-10 md:pb-0">
      <div className=" flex gap-3 items-center">
        <hr className=" w-[65px] border-black border-2" />
        <h1 className=" text-3xl poppins-semibold ">Why Choose IBPD</h1>
        <hr className=" border-black w-3/4 border-2 " />
      </div>
      <div className="  flex gap-5 pl-10 md:px-20">
        {/* <div className=" w-[1px] h-[660px] bg-black  "></div> */}
        <div className=" flex flex-col gap-5">
          <div className=" flex items-center ">
            <div className=" flex flex-col  ">
              <div className=" flex gap-4 md:items-center">
                <h1 className=" text-xl bg-black w-full px-2 rounded-lg py-2 text-white">
                  Tailored Learning Experience
                </h1>
              </div>
              <h1 className="pl-2 pr-10 md:pr-0 mt-2 md:w-[830px] text-justify">
                IBPD offers a personalized learning journey, catering to your
                unique aspirations and professional goals. Our diverse range of
                programs ensures that you receive a customized curriculum that
                aligns with your ambitions.
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <div className=" flex flex-col gap-">
              <div className=" flex gap-4 items-center">
                <h1 className="  text-xl bg-black w-full px-2 rounded-lg py-2 text-white">
                  Mentorship and Guidance
                </h1>
              </div>
              <h1 className="pl-2 pr-10 md:pr-0 mt-2 md:w-[830px] text-justify ">
                Connect with industry experts and seasoned professionals who are
                passionate about fostering talent. At IBPD, mentorship is not
                just a perk; it's an integral part of your journey, providing
                insights and guidance to shape your success.
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <div className=" flex flex-col gap-">
              <div className=" flex gap-4 items-center">
                <h1 className=" text-xl  bg-black w-full px-2 rounded-lg py-2 text-white">
                  Dynamic Networking
                </h1>
              </div>
              <h1 className=" pl-2 pr-10 md:pr-0 mt-2 md:w-[830px] text-justify ">
                Join a vibrant community of ambitious individuals who, like you,
                are committed to continuous growth. Network with peers,
                collaborate on projects, and create lasting connections that
                extend beyond the virtual classroom.
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <div className=" flex flex-col gap-">
              <div className=" flex gap-4 items-center">
                <h1 className=" text-xl bg-black w-full px-2 rounded-lg py-2 text-white ">
                  Cutting-edge Resources:
                </h1>
              </div>
              <h1 className=" pl-2 pr-10 md:pr-0 mt-2 md:w-[830px] text-justify">
                Stay at the forefront of your industry with access to the latest
                tools, technologies, and industry trends. IBPD ensures that you
                are equipped with the knowledge and skills demanded by today's
                ever-evolving professional landscape.
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <div className=" flex flex-col gap-">
              <div className=" flex gap-4 items-center">
                <h1 className=" text-xl bg-black w-full px-2 rounded-lg py-2 text-white ">
                  Recognition of Excellence:
                </h1>
              </div>
              <h1 className=" pl-2 pr-10 md:pr-0 mt-2 md:w-[830px] text-justify">
                Your achievements at IBPD are not just milestones; they are
                celebrated achievements. Our commitment to recognizing
                excellence ensures that your hard work and dedication receive
                the acknowledgment they deserve.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Global;
