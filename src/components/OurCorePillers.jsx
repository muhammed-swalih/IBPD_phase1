import React from "react";

function OurCorePillers() {
  return (
    <div className=" w-full h-auto pb-20 flex flex-col gap-12">
      <div className=" flex gap-5 items-center w-full justify-center md:justify-start">
        <hr className=" border-black border-2 w-[55px] hidden md:block" />
        <div className=" flex flex-col gap-5 ">
          <h1 className=" text-2xl md:text-4xl w-[290px] text-[#303030] font-semibold px-10 md:px-0 text-center md:text-start">
            Our core Pillars
          </h1>
          <hr className=" border-gray-300  md:hidden" />
        </div>
        <hr className=" border-black  border-2 w-full hidden md:block" />
      </div>
      <div className=" px-20 flex flex-col gap-8">
        <div className=" flex flex-col gap-1">
          <h1 className=" text-xl font-semibold">Comprehensive Learning</h1>
          <h1 className=" text-justify w-[1000px]">
            IBPD believes in going beyond the conventional, offering a holistic
            approach to professional development. Our programs encompass not
            only technical proficiency but also leadership, communication, and
            personal growth, ensuring a well-rounded skill set.
          </h1>
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" text-xl font-semibold">Guided by Experts</h1>
          <h1 className=" text-justify w-[1000px]">
            When you choose IBPD, you gain access to a cadre of industry experts
            and seasoned professionals. Our commitment to expert guidance
            ensures that your journey is marked by invaluable insights,
            mentorship, and a strategic understanding of your chosen field.
          </h1>
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" text-xl font-semibold">Cutting-edge Resources</h1>
          <h1 className="text-justify w-[1000px]">
            In a rapidly evolving professional landscape, staying ahead is not
            an option; it's a necessity. IBPD provides cutting-edge resources,
            keeping you updated on the latest industry trends, technologies, and
            best practices, giving you a competitive edge.
          </h1>
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" text-xl font-semibold">Thriving Community</h1>
          <h1 className="text-justify w-[1000px]">
            Join a community of like-minded individuals who share your passion
            for continuous improvement. IBPD is not just a platform; it's a
            supportive network where collaboration and shared learning are
            celebrated, creating an environment conducive to success.
          </h1>
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" text-xl font-semibold">Better Recognition</h1>
          <h1 className="text-justify w-[1000px]">
            IBPD recognizes and celebrates your unique talents and
            contributions. Our commitment to 'Better Recognition' ensures that
            your efforts are not just seen but appreciated, setting you on a
            path to stand out and be acknowledged for your exceptional
            abilities.
          </h1>
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" text-xl font-semibold">
            Strategic Investment in Your Future
          </h1>
          <h1 className="text-justify w-[1000px]">
            Choosing IBPD is not just a decision; it's a strategic investment in
            your future. Our programs and resources are designed for sustained
            and amplified achievements throughout your professional journey,
            providing a roadmap for continuous growth and success.
          </h1>
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" text-xl font-semibold">Excellence as Standard</h1>
          <h1 className="text-justify w-[1000px]">
            At IBPD, we set a high standard for excellence. Our focus on
            excellence permeates every aspect of our offerings, instilling a
            culture of continuous improvement and ensuring that you are
            well-prepared to excel in your respective field.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OurCorePillers;
