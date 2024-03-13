import React from "react";
import partnerBg from "../../assets/webp/partners_bg.webp";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PartnerLandingPage() {
  return (
    <div
      className=" w-full h-screen "
      style={{ backgroundImage: `url(${partnerBg})`, backgroundSize: "cover" }}
    >
      <Navbar />
      <div className=" text-white w-full h-full flex items-center justify-center">
        <div className=" flex flex-col gap-3 items-center">
          <h1 className=" text-6xl font-semibold">Become a partner</h1>
          <h1 className="w-[650px] text-lg text-center">
            We're ambitious for our people, our communities and the region we
            serve - join us in making the world a better place.
          </h1>
        </div>
      </div>
      <div className=" mb-20 mt-24 px-32 ">
        <div className=" flex gap-10 items-start">
          {/* <div className=" w-[1px] h-[940px] bg-black"></div> */}
          <div className=" flex flex-col gap-5 text-sm items-center w-full">
            <h1 className=" w-[1000px] text-justify">
              In the complex landscape of education, where diverse perspectives,
              methodologies, and innovations converge, collaboration stands as a
              cornerstone for progress. IBD recognizes the transformative power
              of collaboration, not only in its mission but as a guiding
              philosophy that shapes our approach to recognition, accreditation,
              and educational advancement. This comprehensive exploration delves
              into the multifaceted dimensions of collaboration within the
              context of IBPD emphasizing its significance in driving excellence
              in education globally. Partnership excellence, as embraced by
              IBPD, extends beyond mere cooperation; it embodies a commitment to
              shared goals, collective learning, and the synergistic impact that
              arises from diverse contributions.
            </h1>
            <h1 className=" w-[1000px] text-justify">
              IBPD actively collaborates with international educational
              standards organizations. This collaboration ensures that our
              accreditation standards align with global best practices. By
              engaging in discussions, conferences, and collaborative
              initiatives, we contribute to the development and refinement of
              global educational standards, fostering a harmonized approach
              towards excellence in education.
            </h1>
            <h1 className=" w-[1000px] text-justify">
              Recognizing learners as key stakeholders, IBPD actively involves
              them in the accreditation process. This collaborative approach
              ensures that the learners perspective is considered in the
              evaluation of institutions. Additionally, learners are engaged in
              forums, surveys, and discussions to gather insights into their
              educational experiences, contributing to the continuous
              improvement of learning centers and institutions. IBPD also
              collaborates with businesses, industry associations, and employers
              to understand the skills and competencies required in the
              professional landscape. This collaborative engagement informs
              accreditation criteria, ensuring that accredited institutions
              produce skilled talents who are well-prepared for the demands of
              the workforce.
            </h1>
            <h1 className=" w-[1000px] text-justify">
              Stakeholder engagement creates feedback loops that are vital for
              the continuous improvement of accreditation processes. Leaners,
              faculty, employers, and institutions provide valuable insights
              that inform the refinement of accreditation criteria, evaluation
              methodologies, and support mechanisms.
            </h1>
            <h1 className=" w-[1000px] text-justify">
              As IBPD continues to champion collaborative excellence, we invite
              Learning Centers, institutions, and stakeholders to join us in
              this transformative endeavor. Together, let's cultivate a culture
              of collaboration that transcends boundaries, enriches educational
              practices, and propels us towards a future where excellence in
              education knows no limits. For inquiries, partnership
              opportunities, or more information, please contact us at
              <span className="  font-semibold"> Info@IBPD.org</span>
            </h1>
            <div className=" mt-5 flex flex-col w-[1000px] gap-5 text-white">
              <div className=" flex items-center gap-7 px-6 h-14 bg-black rounded-3xl">
                <h1 className=" text-xl text-gray-300">Step 1</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" text-xl font-semibold">Application (EOI)</h1>
              </div>
              <div className=" flex items-center px-6 gap-5 h-14 bg-black rounded-3xl">
                <h1 className=" text-xl text-gray-300">Step 2</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" text-xl font-semibold">Assessment </h1>
              </div>
              <div className=" flex items-center gap-5 px-6 h-14 bg-black rounded-3xl">
                <h1 className=" text-xl text-gray-300">Step 3</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" text-xl font-semibold">Eligibility Decision</h1>
              </div>
              <div className=" flex items-center gap-5 px-6 h-14 bg-black rounded-3xl">
                <h1 className=" text-xl text-gray-300">Step 4</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" text-xl font-semibold">
                  Formal Discussion & Presentation
                </h1>
              </div>
              <div className=" flex items-center gap-5 px-6 h-14 bg-black rounded-3xl">
                <h1 className=" text-xl text-gray-300">Step 5</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" text-xl font-semibold">Final Decision</h1>
              </div>
              <div className=" flex items-center gap-5 px-6 h-14 bg-black rounded-3xl">
                <h1 className=" text-xl text-gray-300">Step 6</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" text-xl font-semibold">Payment</h1>
              </div>
              <div className=" flex items-center gap-5 px-6 h-14 bg-green-600 rounded-3xl">
                <h1 className=" text-xl text-gray-300">Step 7</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" text-xl font-semibold">Agreement</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PartnerLandingPage;
