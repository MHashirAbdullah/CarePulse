import React, { useState, useCallback } from "react";
import { assets } from "../assets/assets_frontend/assets";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../utils/cropImage";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "Hashir Abdullah",
    image: assets.profile_pic,
    email: "testinguser@gmail.com",
    phone: "+923211123456",
    address: {
      line1: "123 Main Street, Lahore",
      line2: "Sheikhupura, Lahore, Pakistan",
    },
    gender: "Male",
    dob: "2000-01-21",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppingImage, setCroppingImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageDataUrl = await readFile(file);
      setCroppingImage(imageDataUrl);
      setShowCropper(true);
    }
  };

  const onCropSave = async () => {
    try {
      const croppedImage = await getCroppedImg(croppingImage, croppedAreaPixels);
      setUserData((prev) => ({ ...prev, image: croppedImage }));
      setShowCropper(false);
      setCroppingImage(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <motion.div
      className="min-h-screen p-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
            Profile Settings
          </h1>
          <p className="text-slate-600">Manage your account information and preferences</p>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6 text-white">

<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
  {/* Profile Image + Status */}
  <div className="relative self-center sm:self-auto">
    <div className="relative group">
      <img
        src={userData.image}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg object-cover cursor-pointer"
      />
      {isEdit && (
        <label className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          Change
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onFileChange}
          />
        </label>
      )}
    </div>

    {/* Cropper Modal */}
    <AnimatePresence>
      {showCropper && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-lg p-4 max-w-lg w-full relative">
            <div className="relative h-80 w-full bg-gray-200">
              <Cropper
                image={croppingImage}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            {/* Zoom Slider */}
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full mt-4"
            />

            {/* Buttons */}
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowCropper(false);
                  setCroppingImage(null);
                  setCrop({ x: 0, y: 0 });
                  setZoom(1);
                }}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={onCropSave}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Online Indicator */}
    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
  </div>

  {/* Name Input / Display */}
  <div className="flex-1 text-center sm:text-left">
    {isEdit ? (
      <input
        type="text"
        value={userData.name}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
        className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-300 text-2xl font-bold w-full"
      />
    ) : (
      <h2 className="text-2xl font-bold">{userData.name}</h2>
    )}
  </div>
</div>

          </div>

          {/* Profile Content */}
          <motion.div variants={itemVariants} className="p-8 space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={userData.email}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-600 cursor-not-allowed"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                {isEdit ? (
                  <input
                    type="text"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <input
                    type="text"
                    value={userData.phone}
                    readOnly
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-600 cursor-not-allowed"
                  />
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Address
                </label>
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      value={userData.address.line1}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line1: e.target.value },
                        }))
                      }
                      className="w-full px-4 py-3 border-2 mb-2 border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm"
                    />
                    <input
                      type="text"
                      value={userData.address.line2}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm"
                    />
                  </>
                ) : (
                  <div className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-600">
                    <p>{userData.address.line1}</p>
                    <p>{userData.address.line2}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Basic Information */}
            <div className="border-t border-slate-200 pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Gender
                  </label>
                  {isEdit ? (
                    <select
                      value={userData.gender}
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, gender: e.target.value }))
                      }
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <div className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-600">
                      {userData.gender}
                    </div>
                  )}
                </div>

                {/* DOB */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Date of Birth
                  </label>
                  {isEdit ? (
                    <input
                      type="date"
                      value={userData.dob}
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, dob: e.target.value }))
                      }
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm"
                    />
                  ) : (
                    <div className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-600">
                      {userData.dob}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Buttons */}
          <div className="px-8 py-6 bg-slate-100 flex justify-end rounded-b-2xl border-t border-slate-200">
            {isEdit ? (
              <>
                <button
                  onClick={() => setIsEdit(false)}
                  className="mr-4 bg-slate-300 hover:bg-slate-400 text-slate-800 font-semibold px-6 py-2 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsEdit(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6">
             <div className="flex items-center space-x-3 mb-4">
               <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                 <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800">Security</h3>
            </div>
            <p className="text-slate-600">Your data is encrypted and secure</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-blue-600 font-medium">Protected</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.readAsDataURL(file);
  });
}

export default UserProfile;
