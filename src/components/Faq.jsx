"use client";
import  { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "What is my IP address?",
    a: "Your IP address is the public address your device or network uses to connect to websites, apps, and online services. DarkScout's IP lookup tool can show your current public IPv4 or IPv6 address, along with basic network details such as ISP, ASN, and approximate location.",
  },
  {
    q: "What is an IP address lookup?",
    a: "An IP address lookup checks basic information about an IP address, such as whether it is IPv4 or IPv6, its approximate location, internet service provider, ASN, and network owner. It helps users understand where an IP address is coming from and what network it belongs to.",
  },
  {
    q: "Can this tool check both IPv4 and IPv6 addresses?",
    a: "Yes. DarkScout's IP address lookup and reputation checker can support both IPv4 and IPv6 addresses. IPv4 addresses use the older numeric format, while IPv6 addresses use a newer format designed for a much larger number of internet-connected devices.",
  },
  {
    q: "What is an IP reputation score?",
    a: "An IP reputation score estimates how risky an IP address may be based on security signals such as blacklist listings, abuse reports, spam activity, proxy or VPN usage, Tor activity, malware behavior, bot traffic, and suspicious connection patterns. A higher risk score means the IP should be reviewed more carefully.",
  },
  {
    q: "What does a high-risk IP score mean?",
    a: "A high-risk IP score means the IP address may be associated with suspicious or abusive activity, such as spam, malware, bot traffic, brute-force attempts, proxy usage, or previous abuse reports. It does not always prove malicious activity, but it indicates that the IP may require investigation.",
  },
  {
    q: "Why is my IP address blacklisted?",
    a: "An IP address can be blacklisted if it has been linked to spam, phishing, malware, botnet traffic, brute-force login attempts, open proxy abuse, or suspicious network behavior. Sometimes a shared or recycled IP address may have a bad reputation because of previous users or other systems on the same network.",
  },
  {
    q: "Can an IP address reveal my exact location?",
    a: "No. An IP address usually shows only an approximate location, such as country, region, city, ISP, or network provider. It does not normally reveal an exact home address or precise physical location. IP location data can also be inaccurate, especially when VPNs, mobile networks, or cloud providers are involved.",
  },
  {
    q: "Does using a VPN affect IP reputation?",
    a: "Yes. VPNs can affect IP reputation because many users share the same VPN IP addresses. Some VPN IPs may be flagged as suspicious if they are frequently used for spam, scraping, fraud, account abuse, or other unwanted activity. A VPN IP is not automatically malicious, but it may have a higher risk score depending on its history.",
  },
  {
    q: "Can this tool detect Tor or proxy IPs?",
    a: "Yes, an IP reputation checker can help identify whether an IP address is associated with Tor, proxy services, VPN providers, hosting networks, or other anonymization services. These signals can help security teams understand whether traffic may require additional review.",
  },
  {
    q: "How can I improve my IP reputation?",
    a: "To improve IP reputation, identify and fix the cause of suspicious activity. Personal users should scan devices for malware, secure their router, update passwords, and contact their ISP if needed. Businesses should review server logs, check for compromised systems, stop spam or abuse activity, secure exposed services, and request delisting from blacklist providers after the issue is resolved.",
  },
  {
    q: "Is DarkScout's IP reputation checker free?",
    a: "Yes. DarkScout's IP address lookup and reputation checker is designed as a free security tool. Users can check their public IP address or enter another IPv4 or IPv6 address to review reputation and risk signals.",
  },
  {
    q: "Should businesses monitor IP reputation regularly?",
    a: "Yes. Businesses should monitor IP reputation regularly, especially if they run websites, email servers, APIs, cloud infrastructure, SaaS platforms, or customer-facing applications. Poor IP reputation can affect email deliverability, customer trust, fraud detection, security alerts, and access to online services.",
  },
  {
    q: "What is the difference between IP lookup and IP reputation check?",
    a: "An IP lookup shows basic network information such as IP version, ISP, ASN, and approximate location. An IP reputation check goes further by reviewing security signals such as blacklists, abuse reports, proxy or VPN usage, Tor activity, spam history, malware activity, and suspicious behavior.",
  },
  {
    q: "Can I check someone else's IP address?",
    a: "You can check an IP address for general reputation and network information, but you should only use the results for legitimate security, troubleshooting, fraud prevention, or defensive purposes. Do not use IP lookup information for harassment, unauthorized tracking, or invasive activity.",
  },
  {
    q: "What should I do if my server IP has a bad reputation?",
    a: "If your server IP has a bad reputation, review server logs, check for malware, inspect outgoing email activity, look for compromised accounts, secure exposed services, and confirm that your infrastructure is not being abused. After fixing the root cause, you may need to request removal from relevant blacklists.",
  },
  {
    q: "Can IP reputation affect email deliverability?",
    a: "Yes. If your mail server IP has a poor reputation or appears on spam blacklists, your emails may go to spam or be rejected by receiving mail servers. Businesses should monitor sending IP reputation, configure SPF, DKIM, and DMARC, and investigate unusual email activity quickly.",
  },
  {
    q: "Does a clean IP reputation mean I am fully safe?",
    a: "No. A clean IP reputation only means the IP does not currently show obvious risk signals in the checked sources. It does not guarantee that your device, website, server, or network is fully secure. You should still use strong passwords, update systems, monitor exposure, and scan websites or assets regularly.",
  },
  {
    q: "How often should I check IP reputation?",
    a: "Personal users can check IP reputation when they notice blocked access, unusual warnings, or suspicious account activity. Businesses should check IP reputation regularly, especially after infrastructure changes, email deliverability issues, suspicious traffic, cloud migrations, or security incidents.",
  },
];


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="border-b border-gray-200 py-16 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ds-text ml-[380px]">
              Frequently Asked Questions
            </h1>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start mt-32">

          <ScrollReveal delay={0.05} className="lg:w-2/5">
            <div className="lg:sticky lg:top-8">
              <h2 className="text-lg font-semibold tracking-tight text-ds-text">
                IP Reputation Checker FAQ
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-ds-text-muted">
                Everything you need to understand IP lookup, reputation scoring,
                and security signals in DarkScout.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:w-3/5">
          <div className="space-y-2">

            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={item.q}
                  className={`
                    rounded-lg border transition-all duration-200
                    ${
                      isOpen
                        ? "border-ds-indigo-border bg-ds-surface shadow-sm"
                        : "border-ds-border bg-white hover:border-ds-indigo-border"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                  >
                    <span className="text-sm font-medium text-ds-text">
                      {item.q}
                    </span>

                    <ChevronDown
                      size={16}
                      className={`
                        flex-shrink-0 text-ds-text-muted transition-transform duration-200
                        ${isOpen ? "rotate-180 text-ds-indigo-bright" : ""}
                      `}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4">
                      <p className="text-sm leading-relaxed text-ds-text-muted">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
