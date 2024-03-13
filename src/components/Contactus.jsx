import React, { useState } from "react";
import bg from "../assets/contact_bg.webp";
import Navbar from "./Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { TextField } from "@mui/material";
import emailjs from "emailjs-com";

import Footer from "./Footer";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    to_name: "IBPD", // You can set a default value or change dynamically
    from_name: "", // Set it as the user's name or leave it empty
  });

  formData.from_email = formData.email;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      from_name: formData.name, // Set from_name to the user's name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_712adrr",
        "template_oq7ufdp",
        formData,
        "DRXsVO40bZnQi0X2E"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
          // Handle success
        },
        (error) => {
          console.error("Email sending failed:", error);
          // Handle error
        }
      );
  };
  return (
    <div>
      <div
        className=" w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <Navbar />
        <div className=" w-full h-screen pt-32 flex items-center px-20">
          <div className=" flex justify-between w-full text-white h-full items-center ">
            <div className=" flex flex-col gap-10">
              <h1 className=" text-6xl font-semibold">Contact us</h1>
              <div className=" flex flex-col gap- ">
                <div className=" flex gap-2 items-start ml-5">
                  <h1 className=" text-2xl mt-1">
                    <FaLocationDot />
                  </h1>
                  <div className=" flex flex-col gap-1">
                    <h1 className=" text-xl font-semibold">IBPD</h1>
                    <div className=" flex flex-col ">
                      <h1>Office 128, City Road,</h1>
                      <h1>London, EC1V 2NX,</h1>
                      <h1 className=" uppercase">united kingdom</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-3 text-white">
                <h1>To Discuss Partnership opportunities with IBPD:</h1>
                <div className=" flex gap-3 items-center ml-5">
                  <h1 className="  text-2xl">
                    <BsFillTelephoneFill />
                  </h1>
                  <h1>+447741396616</h1>
                </div>
                <div className=" ml-5 flex gap-3 items-center">
                  <h1 className=" text-2xl">
                    <IoMail />
                  </h1>
                  <h1>info@ibpd.org</h1>
                </div>
              </div>
            </div>
            <div className="  h-[500px]  bg-white bg-opacity-70 rounded-lg text-black w-[400px]">
              <div className="px-10 py-10 flex flex-col gap-4 relative">
                <h1 className=" text-2xl">For general enquiries</h1>
                <TextField
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  label="Your Name"
                />
                <TextField
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  label="Email"
                />
                <TextField
                  value={formData.mobile}
                  name="mobile"
                  onChange={handleChange}
                  label="Mobile No"
                />

                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  id=""
                  placeholder="Message"
                  cols=""
                  rows="3"
                  className=" absolute top-[310px] w-[320px] border border-gray-500 rounded-lg px-3 text-black py-3 bg-white bg-opacity-0 "
                ></textarea>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" flex items-center justify-center w-auto px-10 h-12 rounded-lg bg-[#303030] cursor-pointer absolute top-[430px] "
                >
                  <h1 className=" text-white">Submit</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
