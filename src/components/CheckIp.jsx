import React from "react";
import useZustand from "../zustand/useZustand";
import { IPDetails } from "./IPDetails";

const CheckIp = () => {
  const { ip, setIp, sendIP, data, loading, err } = useZustand();

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6">

    
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          IP Reputation Checker
        </h1>

     
        <div className="flex flex-col gap-4">

          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Enter IP address (e.g. 8.8.8.8)"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => sendIP(ip)}
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
          >
            {loading ? "Checking..." : "Submit"}
          </button>

   
          {err && (
            <p className="text-red-400 text-sm text-center">
              {err}
            </p>
          )}
        </div>

      
        <div className="mt-6">
          {data ? (
            <IPDetails data={data} />
          ) : (
            <p className="text-gray-500 text-center mt-4">
              Enter an IP to see reputation details
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckIp;