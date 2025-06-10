// import React from "react";
// import { assets } from "../assets/assets_frontend/assets";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//     >
//       {/* Left */}
//       <motion.div variants={itemVariants}>
//         <img
//           onClick={() => {
//             navigate("/");
//             scrollTo(0, 0);
//           }}
//           className="mb-5 w-40 cursor-pointer"
//           src={assets.logo}
//           alt=""
//         />
//         <p className="w-full md:w-2/3 text-gray-600 leading-5">
//           Transforming healthcare by effortlessly connecting patients with top
//           doctors for personalized, timely, and compassionate medical care at
//           your convenience.
//         </p>
//       </motion.div>

//       {/* Middle */}
//       <motion.div variants={itemVariants}>
//         <p className="font-medium text-xl mb-4">COMPANY</p>
//         <ul className="cursor-pointer flex flex-col gap-2 text-gray-600">
//           <li onClick={() => { navigate("/"); scrollTo(0, 0); }}>Home</li>
//           <li onClick={() => navigate("/about")}>About Us</li>
//           <li onClick={() => navigate("/contact")}>Contact Us</li>
//           <li>Privacy Policy</li>
//         </ul>
//       </motion.div>

//       {/* Right */}
//       <motion.div variants={itemVariants}>
//         <p className="font-medium text-xl mb-4">GET IN TOUCH</p>
//         <ul className="flex flex-col gap-2 text-gray-600">
//           <li>+92-3123456789</li>
//           <li>support@carepulse@gmail.com</li>
//         </ul>
//       </motion.div>

//       {/* Copyright */}
//       <motion.div
//         className="col-span-full mt-8"
//         variants={itemVariants}
//       >
//         <hr className="border-t border-gray-400 w-full mb-4" />
//         <p className="text-center text-sm text-gray-700">
//           Copyright © 2025 <span className="font-medium">HASHIR ABDULLAH</span> — All Rights Reserved.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Footer;
import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const linkHoverVariants = {
  hover: {
    x: 5,
    color: "#3B82F6",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left */}
      <motion.div variants={itemVariants}>
        <motion.img
          onClick={() => handleNavigation("/")}
          className="mb-5 w-40 cursor-pointer transition-transform"
          src={assets.logo}
          alt="CarePulse Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <p className="w-full md:w-2/3 text-gray-600 leading-6">
          Transforming healthcare by effortlessly connecting patients with top
          doctors for personalized, timely, and compassionate medical care at
          your convenience.
        </p>
      </motion.div>

      {/* Middle */}
      <motion.div variants={itemVariants}>
        <h3 className="font-medium text-xl mb-4 relative">
          COMPANY
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </h3>
        <ul className="cursor-pointer flex flex-col gap-3 text-gray-600">
          <motion.li
            variants={linkHoverVariants}
            whileHover="hover"
            onClick={() => handleNavigation("/")}
            className="transition-colors duration-200"
          >
            Home
          </motion.li>
          <motion.li
            variants={linkHoverVariants}
            whileHover="hover"
            onClick={() => handleNavigation("/about")}
            className="transition-colors duration-200"
          >
            About Us
          </motion.li>
          <motion.li
            variants={linkHoverVariants}
            whileHover="hover"
            onClick={() => handleNavigation("/contact")}
            className="transition-colors duration-200"
          >
            Contact Us
          </motion.li>
          <motion.li
            variants={linkHoverVariants}
            whileHover="hover"
            className="transition-colors duration-200"
          >
            Privacy Policy
          </motion.li>
        </ul>
      </motion.div>

      {/* Right */}
      <motion.div variants={itemVariants}>
        <h3 className="font-medium text-xl mb-4 relative">
          GET IN TOUCH
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </h3>
        <ul className="flex flex-col gap-3 text-gray-600">
          <motion.li
            className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
            whileHover={{ x: 3 }}
          >
            <span className="text-primary">📞</span>
            <a href="tel:+923123456789">+92-3123456789</a>
          </motion.li>
          <motion.li
            className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
            whileHover={{ x: 3 }}
          >
            <span className="text-primary">✉️</span>
            <a href="mailto:support@carepulse@gmail.com">support@carepulse@gmail.com</a>
          </motion.li>
        </ul>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="col-span-full mt-8"
        variants={itemVariants}
      >
        <motion.hr
          className="border-t border-gray-400 w-full mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <p className="text-center text-sm text-gray-700">
          Copyright © 2025 <span className="font-medium">HASHIR ABDULLAH</span> — All Rights Reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
