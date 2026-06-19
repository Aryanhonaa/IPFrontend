"use client";

import { User, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PERSONAL = [
  "Restart router if using a dynamic residential IP",
  "Scan devices for malware",
  "Update router password and firmware",
  "Avoid suspicious browser extensions",
  "Contact your ISP if the issue continues",
];

const BUSINESS = [
  "Check server logs",
  "Review outgoing mail activity",
  "Inspect compromised hosts",
  "Rotate exposed credentials",
  "Check for open proxies",
  "Secure exposed services",
  "Contact blacklist providers after fixing the cause",
  "Monitor domains and infrastructure continuously",
];

export default function WhatToDo() {
  return (
    <section className="relative border-b border-purple-100 bg-gradient-to-b from-purple-50 via-white to-purple-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What Should You Do If Your IP Has a{" "}
              <span className="text-purple-600">Bad Reputation?</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              Follow these steps to reduce risk, clean compromised systems, and
              restore trust for both personal and business environments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <ChecklistCard
              Icon={User}
              title="For Personal Users"
              items={PERSONAL}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <ChecklistCard
              Icon={Building2}
              title="For Businesses"
              items={BUSINESS}
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08} className="mt-10 block">
          <div className="rounded-xl border border-purple-100 bg-white p-6 sm:p-8 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Scan Your Website for Security Risks
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Detect vulnerabilities, abuse patterns, and attack surface risks in
              seconds using DarkScout's scanner.
            </p>

            <a
              href="/services/scan-website/"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-md"
            >
              Explore Attack Surface Mapper
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ChecklistCard({ Icon, title, items }) {
  return (
    <div className="group h-full rounded-xl border border-purple-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-purple-50">
      <div className="mb-4 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 transition-all duration-300 group-hover:bg-purple-600">
          <Icon
            size={18}
            className="text-purple-600 transition-colors group-hover:text-white"
          />
        </div>

        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-600"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
