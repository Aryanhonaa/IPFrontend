import React, { useEffect, useState } from "react";
import {useZustand} from "../zustand/useZustand";
import { IPDetail } from "./IPDetail";
import { IPMap } from "./IPMap";

const CheckIp = () => {
  const { ip, data, loading, err, getIp,setToggle } = useZustand();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    getIp();
  }, [getIp]);

  const handleCheckRisk = () => {
    if (data?.ipv4 || data?.ipv6) {
      setToggle(true);
    }
  };

  const destruct = data?.data?.data?.data2;

  const city = destruct?.city || null;
  const region = destruct?.region || null;
  const org = destruct?.org || null;
  const timezone = destruct?.timezone || null;
  const location = destruct?.loc || null;

  return (
    <>
      <div>
     
        <div className="w-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
            </div>
            <h1 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              IP Reputation Checker
            </h1>
            <span className="ml-auto text-xs text-gray-400 bg-gray-800 px-2.5 py-1 rounded-full">
              Auto-detected
            </span>
          </div>

          {/* Error Alert */}
          {err && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 flex items-start gap-2">
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="flex-1 text-sm">{err}</span>
            </div>
          )}

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4">
            {/* Left column */}
            <div className="space-y-4">
              {/* IP addresses */}
              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/60">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">IPv4</span>
                  <span className="text-sm font-mono text-white">{data?.ipv4 || "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-gray-700/60">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">IPv6</span>
                  <span className="text-sm font-mono text-white truncate max-w-[200px]">
                    {data?.ipv6 || "—"}
                  </span>
                </div>
              </div>

              {/* Location & Network */}
              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/60">
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location & Network
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">City</p>
                    <p className="text-sm font-medium text-white truncate">{city || "—"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Region</p>
                    <p className="text-sm font-medium text-white truncate">{region || "—"}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">Organization</p>
                    <p className="text-sm font-medium text-white truncate">{org || "—"}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">Timezone</p>
                    <p className="text-sm font-medium text-white truncate">{timezone || "—"}</p>
                  </div>
                </div>
              </div>

              {/* Risk button */}
              <button
                onClick={handleCheckRisk}
                disabled={loading || !data?.ipv4 }
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-md shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Checking…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Check IP Risk Score
                  </>
                )}
              </button>
            </div>

            {/* Right: Map */}
            <div className="bg-gray-800/60 rounded-xl border border-gray-700/60 overflow-hidden min-h-[220px] lg:min-h-[320px] flex items-center justify-center">
              {location ? (
                <IPMap loc={location} />
              ) : (
                <p className="text-gray-400 text-sm">No location data available</p>
              )}
            </div>
          </div>

          {!showDetails && !loading && !err && !ip && (
            <p className="text-center text-gray-400 text-sm mt-2">
              Click the button above to check the reputation of your detected IP.
            </p>
          )}
        </div>
      </div>

      {showDetails && data && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 rounded-2xl border border-gray-700/60 shadow-2xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <IPDetail data={data} onClose={() => setShowDetails(false)} />
          </div>
        </div>
      )}
      
    </>
  );
};

export default CheckIp;
