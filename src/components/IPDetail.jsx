import React, { useEffect } from "react";
import { useZustand } from "../zustand/useZustand";
import AnimatedContent from "../styles/AnimatedContent";
export const IPDetail = () => {
  const { data, setToggle } = useZustand();

  const details = data?.data?.data?.data || {};

  const riskScore = data?.data?.risk?.score || 0;

  const {
    ipAddress,
    isPublic,
    ipVersion,
    isWhitelisted,
    abuseConfidenceScore,
    countryCode,
    usageType,
    isp,
    domain,
    hostnames,
    isTor,
    totalReports,
    lastReportedAt,
  } = details;

  const getRiskLevel = (score) => {
    if (score <= 20) return { label: "Low Risk", color: "#22c55e" };
    if (score <= 50) return { label: "Medium Risk", color: "#eab308" };
    if (score <= 80) return { label: "High Risk", color: "#f97316" };
    return { label: "Critical Risk", color: "#ef4444" };
  };

  const risk = getRiskLevel(riskScore);

  const [displayScore, setDisplayScore] = React.useState(0);
  const targetScore = riskScore || 0;

  useEffect(() => {
    const duration = 900;
    const steps = 60;
    const increment = targetScore / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setDisplayScore(targetScore);
        clearInterval(interval);
      } else {
        setDisplayScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [targetScore]);

  return (
    <div>
      <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.5}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1.1}
      threshold={0.1}
      delay={0}
      >
      <div className="w-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                IP Analysis
              </h1>
              <p className="text-gray-400 text-xs mt-0.5">
                Security & reputation report
              </p>
            </div>
          </div>

          <button
            onClick={() => setToggle(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700 hover:bg-gray-700/60 transition text-gray-300 text-sm cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* LEFT - GAUGE */}
          <div className="bg-gray-800/60 rounded-xl p-5 border border-gray-700/60 space-y-4">

            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Risk Analysis
              </h3>

              <span className="text-xs text-gray-400 bg-gray-900/50 px-2 py-0.5 rounded-full border border-gray-700">
                Live Score
              </span>
            </div>

            <div className="flex flex-col items-center">

              <div className="relative w-44 h-44 sm:w-52 sm:h-52">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="10"
                  />

                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke={risk.color}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeDashoffset={
                      2 * Math.PI * 80 -
                      (displayScore / 100) * (2 * Math.PI * 80)
                    }
                    style={{ transition: "stroke-dashoffset 0.6s ease" }}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {displayScore}
                  </span>
                  <span className="text-gray-400 text-xs">
                    Risk Score
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: risk.color }}
                />
                <span className="text-sm font-medium text-white">
                  {risk.label}
                </span>
              </div>

            </div>

            <div className="border-t border-gray-700/60 pt-4 flex flex-wrap gap-2 justify-center">

              {isWhitelisted && (
                <span className="px-2.5 py-1 text-xs text-green-400 bg-green-500/10 border border-green-500/30 rounded-full">
                  ✓ Whitelisted
                </span>
              )}

              {isTor && (
                <span className="px-2.5 py-1 text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-full">
                  TOR Network
                </span>
              )}

              {!isPublic && (
                <span className="px-2.5 py-1 text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                  Private IP
                </span>
              )}

            </div>

          </div>

          {/* RIGHT - DETAILS */}
          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/60">

            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
              IP Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <DetailItem label="IP Address" value={ipAddress} icon="📍" />
              <DetailItem label="Version" value={`IPv${ipVersion}`} icon="🔢" />
              <DetailItem label="Country" value={countryCode || "—"} icon="🌍" />
              <DetailItem label="Usage Type" value={usageType || "—"} icon="📡" />
              <DetailItem label="ISP" value={isp || "—"} icon="🏢" />
              <DetailItem label="Domain" value={domain || "—"} icon="🌐" />
              <DetailItem label="Reports" value={totalReports ?? 0} icon="📊" />
              <DetailItem label="Abuse Score" value={abuseConfidenceScore ?? 0} icon="⚠️" />
              <DetailItem
                label="Last Reported"
                value={lastReportedAt ? new Date(lastReportedAt).toLocaleString() : "—"}
                icon="🕒"
              />
              <DetailItem
                label="Hostnames"
                value={hostnames?.length ? hostnames.join(", ") : "None"}
                icon="📛"
              />

            </div>

          </div>

        </div>

      </div>
      </AnimatedContent>
    </div>
  );
};

const DetailItem = ({ label, value, icon }) => (
  <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30">
    <span className="text-base leading-none mt-0.5">{icon}</span>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-sm font-medium text-white truncate">{value ?? "—"}</p>
    </div>
  </div>
);
