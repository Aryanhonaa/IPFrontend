"use client";

import { Globe, Shield, Mail, Code2, UserCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const USE_CASES = [
  { Icon: Globe, title: "Website owners", body: "Check whether your server IP has a poor reputation." },
  { Icon: Shield, title: "Security teams", body: "Investigate suspicious IPs seen in logs or alerts." },
  { Icon: Mail, title: "Email administrators", body: "Review IP reputation when emails land in spam." },
  { Icon: Code2, title: "Developers & SaaS teams", body: "Validate infrastructure IPs before deployments or migrations." },
  { Icon: UserCircle, title: "Individuals", body: "Check your public IP and understand your network risk level." },
];

export default function UseCases() {
  return (
    <section className="w-full border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
              Use Cases
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Who Should Use an{" "}
              <span className="text-purple-600">IP Reputation Checker?</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              From developers to security teams, IP intelligence helps detect risk,
              prevent abuse, and improve infrastructure trust.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {USE_CASES.map(({ Icon, title, body }, index) => (
            <ScrollReveal key={title} delay={index * 0.06} distance={36}>
              <div className="group w-full rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-md hover:shadow-purple-50">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 transition-all duration-300 group-hover:bg-purple-600">
                  <Icon
                    size={20}
                    className="text-purple-600 transition-colors group-hover:text-white"
                  />
                </div>

                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  {title}
                </h3>

                <p className="text-xs leading-relaxed text-slate-600">
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
