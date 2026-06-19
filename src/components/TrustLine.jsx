import React from "react";

export const TrustLine = () => {
  const trustLine = [
    "Free check",
    "IPv4 and IPv6 supported",
    "No signup required",
    "Results in seconds",
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 px-4 py-2.5 bg-gray-900/40 border border-gray-700/40 rounded-xl backdrop-blur-sm">
        
        {trustLine.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm px-2 py-1 rounded-full hover:text-purple-300 transition-colors duration-200 cursor-default"
          >
            <span className="text-purple-400 text-xs">•</span>
            <span>{item}</span>
          </div>
        ))}

      </div>
    </div>
  );
};
