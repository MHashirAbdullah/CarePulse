import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showfilter, setShowfilter] = useState(false);

  const applyFilter = () => {
    if (speciality && speciality !== "All Doctors") {
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

  const handleSpecialityClick = (cat) => {
    if (!cat || cat === "All Doctors") {
      navigate("/doctors");
    } else if (speciality === cat) {
      navigate("/doctors");
    } else {
      navigate(`/doctors/${cat}`);
    }
    setShowfilter(false);
  };

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
        {/* Mobile Filter Button */}
        <div className="w-full sm:hidden">
          <button
            className={`py-2 px-4 border rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
              showfilter
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
            }`}
            onClick={() => setShowfilter((prev) => !prev)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            Filters
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showfilter ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Desktop Sidebar - Always visible on desktop */}
        <motion.div
          className="hidden sm:flex flex-col gap-3 text-sm text-gray-600 w-full sm:w-auto sm:min-w-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <motion.p
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSpecialityClick(cat)}
              className={`px-4 py-2 border border-gray-300 rounded-md transition-all cursor-pointer hover:border-blue-300 ${
                speciality === cat
                  ? "bg-blue-50 text-blue-600 border-blue-300 font-medium"
                  : "hover:bg-gray-50"
              }`}
            >
              {cat}
            </motion.p>
          ))}
        </motion.div>

        {/* Mobile Filter Panel */}
        <AnimatePresence>
          {showfilter && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full sm:hidden bg-white border border-gray-200 rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Filter by Speciality</h3>
                <button
                  onClick={() => setShowfilter(false)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-2">
                {/* All Doctors Option */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSpecialityClick("All Doctors")}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    !speciality
                      ? "bg-blue-50 text-blue-600 border-blue-300 font-medium"
                      : "border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>All Doctors</span>
                    {!speciality && (
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </motion.div>

                {/* Speciality Categories */}
                {categories.map((cat, i) => (
                  <motion.div
                    key={i}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSpecialityClick(cat)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      speciality === cat
                        ? "bg-blue-50 text-blue-600 border-blue-300 font-medium"
                        : "border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{cat}</span>
                      {speciality === cat && (
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Doctors Grid */}
        <motion.div
          className="w-full grid grid-cols-auto gap-4 gap-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filterDoc.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
              whileHover={{ y: -5 }}
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

      {/* Results Count */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Showing {filterDoc.length} doctor{filterDoc.length !== 1 ? 's' : ''}
          {speciality && ` for ${speciality}`}
        </p>
      </div>
    </motion.div>
  );
};

export default Doctors;
