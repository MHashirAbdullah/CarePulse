import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets_frontend/assets";
import {useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/* left div */}
      <motion.div
        className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          <p>Book Appointment</p>
          <p className="mt-2">
            With 100+ <span className="text-green-500">Trusted</span> & <br />
            <span className="text-green-500">Experienced</span> Doctors
          </p>
        </div>
        <button
        onClick={()=>{navigate('/login'); scrollTo(0,0)}}
        className="bg-white text-sm sm:text-base text-gray-600 px-6 py-3 rounded-full mt-3 scale-90 hover:scale-100 transition-all duration-500 font-medium">
          Create Account
        </button>
      </motion.div>

      {/* right div */}
      <motion.div
        className="hidden md:block md:w-1/2 lg:w-[370px] relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Banner;

