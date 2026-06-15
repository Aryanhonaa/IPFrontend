import React from "react";
import { IPMap } from "./IPMap";

export const IPDetails = ({ data }) => {
  if (!data) return null;

  const rep = data?.data?.data;
  const geo = data?.data?.data2;
  const risk = data?.risk;



  // Risk color mapping
  const getRiskColor = (score) => {
    if (score <= 20) return "text-green-400";
    if (score <= 40) return "text-yellow-400";
    if (score <= 70) return "text-orange-400";
    return "text-red-500";
  };

  const getRiskBar = (score) => {
    if (score <= 20) return "bg-green-500";
    if (score <= 40) return "bg-yellow-500";
    if (score <= 70) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="mt-6 bg-black border border-gray-800 rounded-xl p-6 text-white space-y-6 shadow-lg shadow-black">

      {/* HEADER */}
      <div className="border-b border-gray-800 pb-4">
        <h2 className="text-xl font-bold">IP Intelligence Report</h2>

        <p className="text-gray-400 text-sm">
          {rep?.ipAddress}
        </p>
      </div>

      {/* RISK DASHBOARD */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">

        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm">Security Risk Score</p>

          <span className={`text-lg font-bold ${getRiskColor(risk?.score)}`}>
            {risk?.score}/100
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-800 rounded-full mt-3 overflow-hidden">
          <div
            className={`h-full ${getRiskBar(risk?.score)} transition-all duration-700`}
            style={{ width: `${risk?.score}%` }}
          />
        </div>

        {/* Classification */}
        <div className="mt-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              risk?.classification === "Low Risk"
                ? "border-green-500 text-green-400"
                : risk?.classification === "Moderate Risk"
                ? "border-yellow-500 text-yellow-400"
                : risk?.classification === "High Risk"
                ? "border-orange-500 text-orange-400"
                : "border-red-500 text-red-500"
            }`}
          >
            {risk?.classification}
          </span>
        </div>
      </div>

      {/* BASIC METRICS */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Abuse Score</p>
          <p className="text-xl font-bold text-green-400">
            {rep?.data.abuseConfidenceScore}
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">TOR Status</p>
          <p className={`font-semibold ${rep?.data.isTor ? "text-red-500" : "text-green-400"}`}>
            {rep?.data.isTor ? "TOR Detected" : "Safe"}
          </p>
        </div>

      </div>

      {/* 🔥 NEW: HOSTNAME + LAST REPORTED */}
      <div className="grid grid-cols-2 gap-4">

        {/* Hostname */}
        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Hostname</p>
          <p className="font-semibold text-white">
            {rep?.data.hostnames?.length > 0
              ? rep?.data.hostnames.join(", ")
              : "N/A"}
          </p>
        </div>

        {/* Last Reported */}
        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Last Reported</p>
          <p className="font-semibold text-white">
            {rep?.data.lastReportedAt
              ? new Date(rep.data.lastReportedAt).toLocaleString()
              : "N/A"}
          </p>
        </div>

      </div>

      {/* LOCATION INFO */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Country</p>
          <p className="font-semibold">{geo?.country}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">City</p>
          <p className="font-semibold">{geo?.city}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">ISP</p>
          <p className="font-semibold">{rep?.data.isp}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Organization</p>
          <p className="font-semibold">{geo?.org}</p>
        </div>

      </div>

      {/* MAP */}
      <div className="border border-gray-800 rounded-xl overflow-hidden">
        <IPMap loc={geo?.loc} />
      </div>

    </div>
  );
};