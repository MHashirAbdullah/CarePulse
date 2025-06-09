import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { doctors, currency } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // CONFIGURABLE: Change this value to modify time slot intervals
  const SLOT_INTERVAL_MINUTES = 30;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const slotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const timeSlotVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set end time to 9 PM (21:00)
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        // Today - start from next available time slot
        let now = new Date();
        let currentHour = now.getHours();
        let currentMinute = now.getMinutes();

        // If it's before 10 AM, start from 10 AM
        if (currentHour < 10) {
          currentDate.setHours(10, 0, 0, 0);
        } else if (currentHour >= 21) {
          // If it's after 9 PM, no slots available for today
          setDocSlots((prev) => [...prev, []]);
          continue;
        } else {
          // Calculate next available slot time
          // Round up to the next slot interval
          let nextSlotMinute = Math.ceil((currentMinute + 1) / SLOT_INTERVAL_MINUTES) * SLOT_INTERVAL_MINUTES;

          if (nextSlotMinute >= 60) {
            // Move to next hour
            currentDate.setHours(currentHour + 1, nextSlotMinute - 60, 0, 0);
          } else {
            currentDate.setHours(currentHour, nextSlotMinute, 0, 0);
          }
        }
      } else {
        // Future days - start from 10 AM
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];

      // Generate time slots from current time to end time
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Move to next slot
        currentDate.setMinutes(currentDate.getMinutes() + SLOT_INTERVAL_MINUTES);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    <AnimatePresence mode="wait">
      {docInfo && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key={docId}
        >
          {/* Doctor Details */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={childVariants}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="bg-primary w-full sm:max-w-72 rounded-lg"
                src={docInfo.image}
                alt=""
              />
            </motion.div>

            {/* doctor info: name, degree, Experience */}
            <motion.div
              className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.p
                className="flex items-center gap-2 text-2xl font-medium text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {docInfo.name}
                <img className="w-5" src={assets.verified_icon} alt="" />
              </motion.p>

              <motion.div
                className="flex items-center gap-2 text-sm mt-1 text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <p>
                  {docInfo.degree}- {docInfo.speciality}
                </p>
                <button className="py-0.5 px-2 border-[2px] border-gray-300 text-xs rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  {docInfo.experience}
                </button>
              </motion.div>

              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                  About <img src={assets.info_icon} alt="" />
                </p>
                <p className="text-sm mt-1 text-gray-500 max-w-[700px]">
                  {docInfo.about}
                </p>
              </motion.div>

              <motion.p
                className="mt-4 text-gray-500 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Appointment fee:{" "}
                <span className="text-gray-600">
                  {currency}
                  {docInfo.fees}
                </span>
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Booking Slots */}
          <motion.div
            className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700"
            variants={childVariants}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Booking Slots
            </motion.p>

            <motion.div
              className="flex gap-3 items-center w-full overflow-x-scroll mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {docSlots.length &&
                docSlots.map((item, index) => {
                  // Calculate the date for this slot even if no time slots available
                  const slotDate = new Date();
                  slotDate.setDate(slotDate.getDate() + index);

                  return (
                    <motion.div
                      key={index}
                      variants={slotVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSlotIndex(index)}
                      className={`text-center py-6 min-w-16 rounded-full cursor-pointer transition-all duration-300 ${
                        slotIndex === index
                          ? "bg-primary text-white shadow-lg"
                          : item.length > 0
                          ? "border border-gray-200 hover:border-primary hover:shadow-md"
                          : "border border-gray-300 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <p>{daysOfWeek[slotDate.getDay()]}</p>
                      <p>{slotDate.getDate()}</p>
                    </motion.div>
                  );
                })}
            </motion.div>

            {/* Time slots for selected day */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slotIndex}
                className="flex items-center gap-3 w-full overflow-x-auto mt-4 pb-2"
                style={{scrollbarWidth: 'thin', msOverflowStyle: 'auto', WebkitOverflowScrolling: 'touch'}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {docSlots.length && docSlots[slotIndex] && docSlots[slotIndex].length > 0 ? (
                  docSlots[slotIndex].map((item, index) => (
                    <motion.p
                      key={index}
                      variants={timeSlotVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSlotTime(item.time)}
                      className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                        item.time === slotTime
                          ? "bg-primary text-white shadow-lg"
                          : "text-gray-600 border border-gray-400 hover:border-primary hover:shadow-md"
                      }`}
                    >
                      {item.time}
                    </motion.p>
                  ))
                ) : (
                  <motion.p
                    className="text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    No available slots for this day
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Book appointment button */}
            <motion.button
              className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:bg-primary/90 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book an appointment
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Appointment;
