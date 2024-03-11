import React from "react";
import LandingPage from "../components/HomePageComponents/LandingPage";
import Qualitys from "../components/HomePageComponents/Qualitys";
import HomeAboutUs from "../components/HomePageComponents/HomeAboutUs";
import WhatIBPDHas from "../components/HomePageComponents/WhatIBPDHas";
import NoMatterHowFar from "../components/HomePageComponents/NoMatterHowFar";
import Global from "../components/HomePageComponents/Global";
import TailoredSupport from "../components/HomePageComponents/TailoredSupport";
import Enquiry from "../components/HomePageComponents/Enquiry";

function HomePage() {
  return (
    <div className=" bg-[#EBEBEB]">
      <LandingPage />
      <Qualitys />
      <HomeAboutUs />
      <WhatIBPDHas />
      <NoMatterHowFar />
      <Global />
      <TailoredSupport />
      <Enquiry />
    </div>
  );
}

export default HomePage;
