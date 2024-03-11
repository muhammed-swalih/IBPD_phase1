import React from "react";
import img from "../../assets/containr-two.webp";

function NoMatterHowFar() {
  return (
    <div className=" w-full h-auto">
      <div className=" flex items-center justify-start">
        <div className=" relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="550"
            viewBox="0 0 788 523"
            fill="none"
          >
            <g filter="url(#filter0_d_108_600)">
              <path d="M656.245 0H0V515H784L656.245 0Z" fill="black" />
            </g>
            <defs>
              <filter
                id="filter0_d_108_600"
                x="-4"
                y="0"
                width="792"
                height="523"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_108_600"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_108_600"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className=" absolute bottom-0  w-full h-full flex items-center justify-center text-white ">
            <div className=" flex flex-col gap-10">
              <div className=" text-4xl font-semibold tracking-wide">
                <h1>No matter how far </h1>
                <h1>you've come, you </h1>
                <h1>can always go further </h1>
              </div>
              <h1 className="  w-[500px]">
                Achieving global recognition and prestige is not just a
                testament to the quality of education provided by accredited
                institutions but also a strategic advantage that opens doors to
                numerous opportunities for learners, faculties and the training
                partners{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className=" w-full h-96 bg-white ml-[-130px] ">
          <img className=" w-full h-full object-cover" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NoMatterHowFar;
