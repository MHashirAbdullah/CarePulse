import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Header = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Left Side */}
      <motion.div
        className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]"
        variants={fadeUp}
      >
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With <span className="text-green-500">Trusted</span> Doctors
        </p>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light"
          variants={fadeUp}
        >
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of Trusted Doctors,
            <br className="hidden sm:block" />
            Schedule your Appointments Hassle-Free
          </p>
        </motion.div>

        <motion.a
          href="#speciality"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm mx-auto md:mx-0 hover:shadow-md transition-all duration-300 border border-gray-200"
        >
          Book Appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="md:w-1/2 relative"
        variants={fadeUp}
      >
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
