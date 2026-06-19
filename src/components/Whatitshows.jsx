"use client";

import { Globe2, Gauge, EyeOff, ListX, Bug } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    Icon: Globe2,
    title: "IP Address Details",
    body: "View IPv4 or IPv6 address, ISP, ASN, hostname, and approximate geolocation information.",
  },
  {
    Icon: Gauge,
    title: "IP Reputation Score",
    body: "Determine whether an IP appears clean, suspicious, or high-risk using multiple reputation indicators.",
  },
  {
    Icon: EyeOff,
    title: "Proxy, VPN & Tor Detection",
    body: "Identify anonymization services, proxy networks, VPNs, and Tor exit nodes that may obscure identity.",
  },
  {
    Icon: ListX,
    title: "Blacklist Status",
    body: "Check if an IP has been flagged by security vendors, spam databases, or threat intelligence feeds.",
  },
  {
    Icon: Bug,
    title: "Abuse & Threat Signals",
    body: "Review indicators of spam, malware activity, bot behavior, scanners, and brute-force attacks.",
  },
];

export default function WhatItShows() {
  return (
    <section className="border-b border-gray-200 py-16 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              DarkScout Intelligence
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900">
              What Does DarkScout's
              <span className="block text-purple-700">
                IP Reputation Checker Show?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600">
              Analyze IP addresses using reputation data, abuse intelligence,
              network information, and threat signals to better understand risk
              and suspicious activity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, body }, index) => (
            <ScrollReveal key={title} delay={index * 0.07} distance={36}>
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100">
                <div className="absolute left-0 top-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 transition-all duration-300 group-hover:bg-purple-600">
                  <Icon
                    size={20}
                    className="text-purple-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
