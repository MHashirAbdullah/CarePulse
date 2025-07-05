// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const MyAppointments = () => {
//   const { doctors } = useContext(AppContext);

//   return (
//     <div className="min-h-screen p-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">My Appointments</h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
//         </div>

//         <div className="space-y-6">
//           {doctors.slice(0, 2).map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
//             >
//               <div className="p-6">
//                 <div className="flex flex-col md:flex-row gap-6">
//                   {/* Doctor Image */}
//                   <div className="flex-shrink-0">
//                     <div className="relative">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md ring-4 ring-blue-100"
//                       />
//                       <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
//                     </div>
//                   </div>

//                   {/* Doctor Details */}
//                   <div className="flex-1 space-y-3">
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-800 mb-1">{item.name}</h3>
//                       <p className="text-blue-600 font-medium text-lg">{item.speciality}</p>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="flex items-start gap-2">
//                         <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                         <div>
//                           <p className="text-sm font-medium text-gray-700">Address:</p>
//                           <p className="text-sm text-gray-600">{item.address.line1}</p>
//                           <p className="text-sm text-gray-600">{item.address.line2}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
//                         <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                         </svg>
//                         <div>
//                           <span className="text-sm font-medium text-gray-700">Date & Time: </span>
//                           <span className="text-sm font-bold text-blue-700">4 July 2025 • 10:00 AM</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="mt-6 pt-6 border-t border-gray-100">
//                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                     <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                       </svg>
//                       Pay Online
//                     </button>

//                     <button className="flex-1 bg-white hover:bg-red-50 text-red-600 font-semibold py-3 px-6 rounded-lg border-2 border-red-200 hover:border-red-300 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                       Cancel Appointment
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {doctors.length === 0 && (
//           <div className="text-center py-12">
//             <div className="bg-white rounded-2xl shadow-lg p-8">
//               <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               <h3 className="text-xl font-semibold text-gray-600 mb-2">No appointments scheduled</h3>
//               <p className="text-gray-500">Book your first appointment to get started!</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.10,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Appointments</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </motion.div>

        {/* Appointment Cards */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {doctors.slice(0, 5).map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Doctor Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md ring-4 ring-blue-100"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-blue-600 font-medium text-lg">{item.speciality}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Address:</p>
                          <p className="text-sm text-gray-600">{item.address.line1}</p>
                          <p className="text-sm text-gray-600">{item.address.line2}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Date & Time: </span>
                          <span className="text-sm font-bold text-blue-700">4 July 2025 • 10:00 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Pay Online
                    </button>

                    <button className="flex-1 bg-white hover:bg-red-50 text-red-600 font-semibold py-3 px-6 rounded-lg border-2 border-red-200 hover:border-red-300 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State Animation */}
        {doctors.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No appointments scheduled</h3>
              <p className="text-gray-500">Book your first appointment to get started!</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
