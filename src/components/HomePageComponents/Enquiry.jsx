import { TextField } from "@mui/material";
import React from "react";

function Enquiry() {
  return (
    <div className=" w-full h-auto flex items-center justify-center text-white">
      <div className=" my-10">
        <div className=" w-[1000px]  px-16 py-16 bg-[#202020] rounded-xl">
          <div className=" flex flex-col gap-10">
            <div className=" flex flex-col gap-2">
              <h1 className=" text-3xl font-semibold">Enquire Now!</h1>
              <h1 className=" w-[450px]">
                For inquiries, collaboration opportunities, or more information,
                please contact us at Your Contact Information.
              </h1>
            </div>
            <div className=" flex gap-5 items-center">
              <TextField
                label="Your name"
                InputProps={{
                  style: {
                    color: "white",
                    border: "solid 1px white",
                    height: "50px",
                    width: "250px",
                  }, // Change 'red' to your desired text color
                }}
                InputLabelProps={{
                  style: {
                    color: "white", // Change 'white' to your desired label color
                  },
                }}
              />
              <TextField
                label="Email"
                InputProps={{
                  style: {
                    color: "white",
                    border: "solid 1px white",
                    height: "50px",
                    width: "250px",
                  }, // Change 'red' to your desired text color
                }}
                InputLabelProps={{
                  style: {
                    color: "white", // Change 'white' to your desired label color
                  },
                }}
              />
              <TextField
                label="Mobile No"
                InputProps={{
                  style: {
                    color: "white",
                    border: "solid 1px white",
                    height: "50px",
                    width: "250px",
                  }, // Change 'red' to your desired text color
                }}
                InputLabelProps={{
                  style: {
                    color: "white", // Change 'white' to your desired label color
                  },
                }}
              />
            </div>
            <div className=" w-32 h-12 text-[#303030] flex items-center justify-center bg-white rounded-sm">
              <h1>Submit</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
