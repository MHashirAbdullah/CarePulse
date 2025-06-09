import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SpecialityMenu = () => {
  return (
    <motion.div
      id="speciality"
      className="flex flex-col items-center py-16 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl font-medium">Find By Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm mt-2">
        Simply Browse through our Extensive list of Doctors, Schedule your
        Appointments Hassle-Free
      </p>

      {/* Grid for small devices, horizontal scroll for larger screens */}
      <div className="w-full px-4 pt-8 pb-4">
        {/* Grid layout for small screens (mobile) */}
        <motion.div
          className="grid grid-cols-3 gap-4 sm:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {specialityData.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="pt-3">
              <Link
                onClick={() => scrollTo(0, 0)}
                className="flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                to={`/doctors/${item.speciality}`}
              >
                <img className="w-16 mb-2" src={item.image} alt="" />
                <p className="text-center text-[10px] leading-tight">{item.speciality}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Horizontal scroll for larger screens */}
        <motion.div
          className="hidden sm:flex gap-4 justify-center overflow-x-auto pb-4 pt-3"
          style={{
            scrollbarWidth: 'thin',
            msOverflowStyle: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {specialityData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-shrink-0"
            >
              <Link
                onClick={() => scrollTo(0, 0)}
                className="flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[100px]"
                to={`/doctors/${item.speciality}`}
              >
                <img className="w-24 mb-2" src={item.image} alt="" />
                <p className="text-center whitespace-nowrap">{item.speciality}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpecialityMenu;
