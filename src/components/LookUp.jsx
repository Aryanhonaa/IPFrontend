"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Lookup() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              IP Address Lookup vs{" "}
              <span className="text-purple-600">IP Reputation Checker</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              An IP address lookup shows basic information such as IP version,
              approximate location, ISP, and ASN. An IP reputation checker goes
              further by analyzing risk signals like blacklists, abuse reports,
              proxy/VPN/Tor usage, spam activity, and suspicious behavior.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <ScrollReveal delay={0.05}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              From IP Reputation to External Exposure Monitoring
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              An IP reputation check gives you a snapshot of one IP address.
              Businesses need broader visibility across domains, subdomains,
              exposed assets, leaked credentials, and dark web exposure.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/services/attack-surface-mapper/"
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-md"
              >
                Explore Attack Surface Mapper
                <ArrowRight size={14} />
              </a>

              <a
                href="/services/scan-email/"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-purple-300 hover:bg-purple-50"
              >
                Start Dark Web Monitoring
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
