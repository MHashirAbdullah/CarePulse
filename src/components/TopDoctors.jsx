import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

// Card animation variant
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <motion.div
      className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl font-medium">Top Doctors</h1>
      <p className="sm:w-1/3 text-center text:sm">
        Connect with Top Doctors, Care at Your Fingertips!
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 12).map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() =>{ navigate(`/appointment/${item._id}`), scrollTo(0,0)}}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer"
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => {
          navigate(`/doctors`);
          scrollTo(0, 0);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-300 text-gray-700 px-10 py-3 rounded-full mt-5 font-semibold"
      >
        more
      </motion.button>
    </motion.div>
  );
};

export default TopDoctors;
