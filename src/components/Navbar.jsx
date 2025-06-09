import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400"
    >
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-1 ${isActive ? "border-b-2 border-primary text-primary" : ""}`
          }
        >
          Home
        </NavLink>
        
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            `py-1 ${isActive ? "border-b-2 border-primary text-primary" : ""}`
          }
        >
          All Doctors
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `py-1 ${isActive ? "border-b-2 border-primary text-primary" : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-1 ${isActive ? "border-b-2 border-primary text-primary" : ""}`
          }
        >
          Contact
        </NavLink>
      </ul>

      <div className="flex items-center gap-2">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/userprofile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-primary/80 transition-colors duration-300"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
