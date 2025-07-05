
import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [token, setToken] = useState(true);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setToken(false);
    setShowDropdown(false);
    navigate("/");
  };

  const handleDropdownItemClick = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-gray-400 mb-5 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.img
            onClick={() => navigate("/")}
            className="w-32 cursor-pointer hover:scale-105 transition-transform duration-300"
            src={assets.logo}
            alt="Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-5 font-medium">
            {["/", "/doctors", "/about", "/contact"].map((path, i) => {
              const labels = ["Home", "All Doctors", "About", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `relative py-2 px-1 transition-all duration-300 hover:text-blue-600 ${
                      isActive
                        ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:rounded-full"
                        : "text-gray-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300 hover:after:rounded-full"
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </ul>

          {/* User Actions */}
          <div className="flex items-center gap-4 relative">
            {token ? (
              <div
                className="relative dropdown-menu"
                ref={dropdownRef}
              >
                <div
                  className="flex items-center gap-2 cursor-pointer p-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setShowDropdown(!showDropdown)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setShowDropdown(!showDropdown);
                    }
                  }}
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100 hover:ring-blue-200 transition-all duration-200"
                    src={assets.profile_pic}
                    alt="Profile"
                  />
                  <svg
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50"
                    >
                      {/* Arrow */}
                      <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100 shadow-md"></div>

                      <div className="py-2">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">Welcome back!</p>
                          <p className="text-xs text-gray-500">Manage your account</p>
                        </div>

                        <div className="flex flex-col gap-1 py-2">
                          <button
                            onClick={() => handleDropdownItemClick("/userprofile")}
                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center gap-3"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            My Profile
                          </button>

                          <button
                            onClick={() => handleDropdownItemClick("/my-appointments")}
                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center gap-3"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            My Appointments
                          </button>

                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center gap-3"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              Logout
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full font-medium hidden lg:block transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => navigate("/login")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Account
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setShowMenu(true)}
            >
              <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowMenu(false)} />

            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
              <div className="flex items-center justify-between px-5 py-6 border-b border-gray-100">
                <img className="w-24" src={assets.logo} alt="Logo" />
                <button
                  onClick={() => setShowMenu(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <img className="w-7" src={assets.cross_icon} alt="Close" />
                </button>
              </div>

              <div className="px-5 py-6">
                <ul className="flex flex-col items-center gap-2 text-lg font-medium">
                  {["/", "/doctors", "/about", "/contact"].map((path, i) => {
                    const labels = ["Home", "All Doctors", "About", "Contact"];
                    return (
                      <li key={path} className="w-full">
                        <NavLink
                          to={path}
                          onClick={() => setShowMenu(false)}
                          className={({ isActive }) =>
                            `block py-3 px-4 rounded-lg transition-all duration-200 text-center ${
                              isActive
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            }`
                          }
                        >
                          {labels[i]}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>

                {!token && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => {
                        navigate("/login");
                        setShowMenu(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg"
                    >
                      Create Account
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
