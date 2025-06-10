import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <motion.div
        className="text-center pt-16 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact <span className="text-primary">US</span>
        </h1>
        <motion.div
          className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-12 md:gap-16 bg-white rounded-2xl shadow-sm p-6 md:p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Image */}
          <motion.img
            className="w-full lg:w-auto lg:max-w-[400px] lg:min-w-[360px] rounded-xl shadow-lg object-cover"
            src={assets.contact_image}
            alt="Contact CarePulse healthcare support"
            variants={imageVariants}
          />

          {/* Contact Information */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-start space-y-8"
            variants={itemVariants}
          >
            {/* Office Information */}
            <motion.div
              className="space-y-4"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary pb-2 inline-block">
                Our Office
              </h2>
              <div className="space-y-3">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed flex items-start gap-2">
                  <span className="text-primary font-semibold">📍</span>
                  236 Ferozepur Road, <br className="md:hidden" />
                  Near Qaddafi Stadium, <br />
                  Lahore, Pakistan
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600 text-base md:text-lg flex items-center gap-2">
                    <span className="text-primary font-semibold">📞</span>
                    <a href="tel:+923123456789" className="hover:text-primary transition-colors">
                      (+92) 312-3456789
                    </a>
                  </p>
                  <p className="text-gray-600 text-base md:text-lg flex items-center gap-2">
                    <span className="text-primary font-semibold">✉️</span>
                    <a href="mailto:support@carepulse.com" className="hover:text-primary transition-colors">
                      support@carepulse.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Career Information */}
            <motion.div
              className="space-y-4 pt-6 border-t border-gray-200 w-full"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary pb-2 inline-block">
                Careers at CarePulse
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Learn more about our teams and job openings. Join us in revolutionizing healthcare accessibility.
              </p>

              <motion.button
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                EXPLORE JOBS
              </motion.button>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              className="space-y-4 pt-6 border-t border-gray-200 w-full"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-red-500">Closed</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Contact Methods */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-bold text-gray-800 mb-2">Emergency Support</h3>
            <p className="text-gray-600 text-sm">24/7 emergency healthcare support available</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm">Get instant help through our live chat feature</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-gray-800 mb-2">Mobile App</h3>
            <p className="text-gray-600 text-sm">Download our app for convenient access</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
