import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const categories = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4"
    >
      <p className="text-gray-600 text-sm sm:text-base mt-6">
        Discover Top Doctors Tailored to Your Needs, Ready to Provide Expert
        Care with Just a Click.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-8">
        {/* Sidebar */}
        <motion.div
          className="flex flex-col gap-3 text-sm text-gray-600 w-full sm:w-auto sm:min-w-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <motion.p
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                speciality === cat
                  ? navigate("/doctors")
                  : navigate(`/doctors/${cat}`)
              }
              className={`px-4 py-2 border border-gray-300 rounded-md transition-all cursor-pointer ${
                speciality === cat ? "bg-indigo-100 text-black" : ""
              }`}
            >
              {cat}
            </motion.p>
          ))}
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          className="w-full grid grid-cols-auto gap-4 gap-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {filterDoc.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img className="bg-blue-50 w-full" src={item.image} alt="" />
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Doctors;
