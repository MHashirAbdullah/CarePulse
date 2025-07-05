// import React, { useState } from "react";

// const Login = () => {
//   const [state, setState] = useState("Sign Up");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//   };
//   return (
//     <form className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </p>
//         <p>
//           Please {state === "Sign Up" ? "sign up" : "log in"} for Booking
//           Appointments
//         </p>
//         {state === "Sign Up" &&
//                 <div className="w-full">
//                 <p>Full Name:</p>
//                 <input
//                   className="border border-zinc-300 rounded w-full p-2 m-1"
//                   type="text"
//                   onChange={(e) => setName(e.target.name)}
//                   value={name}
//                   required
//                 />
//               </div>
//         }
//         {/* Email  */}
//         <div className="w-full">
//           <p>Email:</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 m-1"
//             type="email"
//             onChange={(e) => setEmail(e.target.email)}
//             value={email}
//             required
//           />
//         </div>
//         {/* Password */}
//         <div className="w-full">
//           <p>Password:</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 m-1"
//             type="password"
//             onChange={(e) => setPassword(e.target.password)}
//             value={password}
//             required
//           />
//         </div>

//         <button className="bg-primary text-white rounded w-full p-2 m-1 hover:bg-primary/90 transition-colors duration-200">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         {state === "Sign Up" ? (
//           <p className="text-sm">
//             Already have an account?{" "}
//             <span
//               className="text-primary cursor-pointer"
//               onClick={() => setState("Login")}
//             >
//               Login
//             </span>
//           </p>
//         ) : (
//           <p className="text-sm">
//             Don't have an account?{" "}
//             <span
//               className="text-primary cursor-pointer"
//               onClick={() => setState("Sign Up")}
//             >
//               Sign Up
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Main Card */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 space-y-6">
          {/* Header */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {state === "Sign Up" ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-slate-600">
              Please {state === "Sign Up" ? "sign up" : "log in"} to book your appointments
            </p>
          </motion.div>

          {/* Form Fields */}
          <form className="space-y-5" onSubmit={onSubmitHandler}>
            {/* Name Field with AnimatePresence */}
            <AnimatePresence initial={false} mode="wait">
              {state === "Sign Up" && (
                <motion.div
                  key="nameField"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-slate-400"
                      type="text"
                      placeholder="Enter your full name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-slate-400"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-slate-400"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <span>{state === "Sign Up" ? "Create Account" : "Sign In"}</span>
              )}
            </motion.button>
          </form>

          {/* Toggle State */}
          <div className="text-center">
            {state === "Sign Up" ? (
              <p className="text-slate-600">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 hover:underline"
                  onClick={() => setState("Login")}
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p className="text-slate-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 hover:underline"
                  onClick={() => setState("Sign Up")}
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">Secure & Protected</span>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Your data is encrypted and secure</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
