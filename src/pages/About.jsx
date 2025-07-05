import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  const DEFAULT_DURATION = 0.4;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: DEFAULT_DURATION,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DEFAULT_DURATION,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: DEFAULT_DURATION,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DEFAULT_DURATION,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Page Header */}
      <motion.div
        className="text-center pt-16 pb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About <span className="text-primary">US</span>
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Image and Text Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 my-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            className="w-full lg:w-auto lg:max-w-[400px] lg:min-w-[360px] rounded-xl shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
            src={assets.about_image}
            alt="About CarePulse healthcare platform"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="flex-1 space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="space-y-5"
              variants={itemVariants}
            >
              <motion.p
                className="text-gray-700 leading-relaxed text-base md:text-lg"
                variants={itemVariants}
              >
                CarePulse is dedicated to simplifying healthcare access. We
                connect patients with top specialists, from General Physicians to
                Dermatologists and Gastroenterologists, through a seamless,
                user-friendly platform. Book appointments effortlessly, browse
                expert doctors by specialty, and discover related professionals
                tailored to your needs. Our mission is to empower you with
                personalized, compassionate care, ensuring timely consultations
                and early diagnosis.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed text-base md:text-lg"
                variants={itemVariants}
              >
                With a focus on convenience and quality, we bridge the gap between
                patients and trusted healthcare providers, delivering a reliable,
                secure experience. Whether addressing everyday health concerns or
                specialized conditions, our app supports your wellness journey
                with precision and care, anytime, anywhere.
              </motion.p>
            </motion.div>

            <motion.div
              className="pt-6 border-t border-gray-200"
              variants={itemVariants}
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight relative"
                variants={itemVariants}
              >
                <span className="relative">
                  OUR VISION
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h3>
              <motion.p
                className="text-gray-700 leading-relaxed text-base md:text-lg font-medium"
                variants={itemVariants}
              >
                To transform healthcare by empowering patients with seamless
                access to top specialists, fostering wellness through innovative
                technology, trusted expertise, and compassionate care for every
                health journey.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              WHY <span className="text-primary">CHOOSE US</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="border-r border-b md:border-b-0 border-gray-200 px-8 md:px-12 py-10 md:py-16 flex flex-col gap-5 text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <motion.div
                  className="text-3xl mb-3 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5 }}
                >
                  ⚡
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  EFFICIENCY
                </h4>
                <p className="text-base leading-relaxed">
                  Streamline your healthcare with swift appointment booking and
                  instant access to top specialists, saving time and effort.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="border-r border-b md:border-b-0 md:border-r border-gray-200 px-8 md:px-12 py-10 md:py-16 flex flex-col gap-5 text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <motion.div
                  className="text-3xl mb-3 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5 }}
                >
                  🏠
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  CONVENIENCE
                </h4>
                <p className="text-base leading-relaxed">
                  Book appointments anytime, anywhere, with a user-friendly platform
                  designed to fit your schedule and needs seamlessly.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="px-8 md:px-12 py-10 md:py-16 flex flex-col gap-5 text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <motion.div
                  className="text-3xl mb-3 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5 }}
                >
                  👤
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  PERSONALIZATION
                </h4>
                <p className="text-base leading-relaxed">
                  Discover tailored care from expert doctors matched to your unique
                  health needs for a compassionate experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { number: "10K+", label: "Happy Patients" },
            { number: "100+", label: "Expert Doctors" },
            { number: "20+", label: "Specialties" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
