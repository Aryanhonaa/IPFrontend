"use client";

import { Wifi, Gauge, ShieldAlert } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CoreConcepts() {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white">
      <ScrollReveal>
        <ContentRow
          heading="What Is My IP Address?"
          body="Your IP address is the public address your device or network uses to communicate online. Websites, applications, and online services can typically see your public IP address whenever you connect. DarkScout helps identify your current IPv4 or IPv6 address, network provider, ASN, and location details."
          art={<IconPanel Icon={Wifi} />}
        />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                Network Fundamentals
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                IPv4 vs IPv6
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                Both are Internet Protocol versions used to identify devices on
                networks, but IPv6 was designed to solve address exhaustion and
                improve scalability.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Example
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-purple-600">
                      IPv4
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-700">
                      192.0.2.1
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Traditional addressing format used across most of today's
                      internet.
                    </td>
                  </tr>

                  <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-purple-600">
                      IPv6
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-700">
                      2001:db8::1
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Modern addressing system supporting vastly larger address
                      space and future internet growth.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <ContentRow
          reverse
          heading="What Is an IP Reputation Score?"
          body="An IP reputation score evaluates the trustworthiness of an IP address using multiple threat intelligence sources. Reputation can be affected by spam activity, abuse reports, malware distribution, bot traffic, anonymization services, suspicious login attempts, and blacklist appearances."
          art={<IconPanel Icon={Gauge} />}
        />
      </ScrollReveal>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                Threat Intelligence
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                What Can Hurt an IP's Reputation?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                Security vendors continuously monitor malicious behavior and
                suspicious patterns. These activities commonly contribute to poor
                IP reputation scores.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Spam activity",
              "Malware distribution",
              "Botnet participation",
              "Brute-force attacks",
              "Credential stuffing",
              "Web scraping abuse",
              "Proxy usage",
              "VPN traffic",
              "Tor exit node activity",
              "Phishing infrastructure",
              "Open relay services",
              "Previous abuse reports",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.04} distance={32}>
                <div className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-red-100 p-2">
                      <ShieldAlert
                        size={16}
                        className="text-red-600"
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContentRow({ heading, body, art, reverse }) {
  return (
    <section className="py-16">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
            DarkScout Intelligence
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            {heading}
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            {body}
          </p>
        </div>

        <div>{art}</div>
      </div>
    </section>
  );
}

function IconPanel({ Icon }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100" />

      <div className="relative flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 shadow-lg shadow-purple-200">
          <Icon size={36} className="text-white" />
        </div>
      </div>

      <div className="relative mt-6 flex justify-center gap-2">
        <div className="h-1.5 w-12 rounded-full bg-purple-200" />
        <div className="h-1.5 w-8 rounded-full bg-purple-300" />
        <div className="h-1.5 w-10 rounded-full bg-purple-200" />
      </div>
    </div>
  );
}
