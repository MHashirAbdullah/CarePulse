// import React, { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";
// const Doctors = () => {
//   const navigate = useNavigate();
//   const { speciality } = useParams();
//   const { doctors } = useContext(AppContext);
//   const [filterDoc, setFilterDoc] = useState([]);

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div>
//       <p className="text-gray-600">
//         Discover Top Doctors Tailored to Your Needs, Ready to Provide Expert
//         Care with Just a Click.
//       </p>

//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         {/* sidebar */}
//         <div className="flex flex-col gap-4 text-sm text-gray-600">
//           <p
//             onClick={() =>
//               speciality === "General physician"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/General physician")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "General physician"
//                 ? "bg-indigo-100 text-black"
//                 : ""
//             }`}
//           >
//             General Physician
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Gynecologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Gynecologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
//             }`}
//           >
//             Gynecologist
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Dermatologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Dermatologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
//             }`}
//           >
//             Dermatologist
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Pediatricians"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Pediatricians")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
//             }`}
//           >
//             Pediatricians
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Neurologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Neurologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
//             }`}
//           >
//             Neurologist
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Gastroenterologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Gastroenterologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Gastroenterologist"
//                 ? "bg-indigo-100 text-black"
//                 : ""
//             }`}
//           >
//             Gastroenterologist
//           </p>
//         </div>
//         {/* doctors */}
//         <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
//           {filterDoc.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
//             >
//               <img className="bg-blue-50" src={item.image} alt="" />
//               <div className="p-4">
//                 <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                   <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                   <p>Available</p>
//                 </div>
//                 <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                 <p className="text-gray-600 text-sm">{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;
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
