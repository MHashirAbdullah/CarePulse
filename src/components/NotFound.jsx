// import React, { useState, useEffect, useMemo } from "react";

// const NotFound = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   // Mouse tracker
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Stable random floating elements
//   const floatingElements = useMemo(() => {
//     const icons = ["💊", "🏥", "🩺", "💉", "🧬", "⚕️", "🫀", "🔬"];
//     return icons.map((icon, i) => {
//       const left = `${Math.random() * 90}%`;
//       const top = `${Math.random() * 90}%`;
//       const duration = `${3 + Math.random() * 2}s`;
//       const delay = `${Math.random() * 2}s`;

//       return (
//         <div
//           key={i}
//           className="absolute pointer-events-none animate-floating"
//           style={{
//             left,
//             top,
//             animationDuration: duration,
//             animationDelay: delay,
//             opacity: 0.2,
//           }}
//           aria-hidden="true"
//         >
//           <div className="text-3xl blur-sm">{icon}</div>
//         </div>
//       );
//     });
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-50 overflow-hidden font-sans text-gray-800">
//       {/* Background glow orbs */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 opacity-15 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-cyan-400 opacity-10 rounded-full blur-3xl animate-pulse delay-2000" />
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 z-0">{floatingElements}</div>

//       {/* Cursor Tracker */}
//       <div
//         className="fixed w-6 h-6 bg-blue-400 rounded-full z-50 pointer-events-none opacity-40 transition-transform duration-200 mix-blend-multiply"
//         style={{
//           left: mousePosition.x - 12,
//           top: mousePosition.y - 12,
//           transform: `scale(${isHovering ? 1.8 : 1})`,
//         }}
//       />

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
//         <div className="text-center max-w-3xl">
//           {/* Glowing 404 */}
//           <div className="relative mb-10">
//             <h1
//               className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent select-none leading-none"
//               aria-label="404 - Page Not Found"
//             >
//               4⚕4
//             </h1>
//             <div className="absolute inset-0 text-[8rem] sm:text-[12rem] md:text-[16rem] font-black text-blue-500 opacity-20 animate-pulse select-none">
//               4⚕4
//             </div>
//           </div>

//           {/* Error Card */}
//           <div
//             className="bg-white/80 backdrop-blur-lg rounded-2xl border border-white/30 p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:scale-[1.02]"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto flex items-center justify-center shadow-md mb-6">
//               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
//               </svg>
//             </div>

//             <h2 className="text-4xl font-bold mb-3">Page Not Found</h2>
//             <p className="text-lg text-gray-600 mb-6">
//               Oops! This page seems to have been discharged from our system.
//               But don’t worry, we’re here to guide you back.
//             </p>

//             <div className="bg-white border rounded-lg p-5 mb-6 shadow-sm text-left">
//               <h3 className="font-semibold mb-2">Possible reasons:</h3>
//               <ul className="space-y-1 text-gray-600">
//                 <li>• You followed an outdated or broken link</li>
//                 <li>• You mistyped the URL</li>
//                 <li>• The content has been moved or removed</li>
//               </ul>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
//               <button
//                 onClick={() => window.history.back()}
//                 className="px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
//               >
//                 ← Go Back
//               </button>
//               <button
//                 onClick={() => (window.location.href = "/")}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:scale-105 transition-transform"
//               >
//                 Home Page →
//               </button>
//             </div>

//             {/* Support Links */}
//             <div className="mt-6 text-sm text-gray-500 space-x-6">
//               <a href="/contact" className="hover:underline hover:text-blue-600">Emergency</a>
//               <a href="/doctors" className="hover:underline hover:text-blue-600">Contact Doctor</a>
//               <a href="/help" className="hover:underline hover:text-blue-600">Help Center</a>
//             </div>
//           </div>

//           {/* Footer Status */}
//           <div className="mt-10 flex justify-center items-center gap-2 text-sm text-gray-600">
//             <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
//             Prescripto Status: Healthy
//           </div>
//         </div>
//       </div>

//       {/* Custom Floating Animation */}
//       <style>{`
//         @keyframes floating {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//         .animate-floating {
//           animation-name: floating;
//           animation-timing-function: ease-in-out;
//           animation-iteration-count: infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NotFound;
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center text-gray-800">
      <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-blue-500 text-blue-600 rounded hover:bg-blue-500 hover:text-white transition"
        >
          ← Go Back
        </button>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Home Page →
        </a>
      </div>
    </div>
  );
};

export default NotFound;
