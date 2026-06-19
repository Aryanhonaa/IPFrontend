import { useZustand } from "../zustand/useZustand";
import { IPDetail } from "./IPDetail";
import CheckIp from "./CheckIp";
import { TrustLine } from "./TrustLine";
import ScrollReveal from "./ScrollReveal";


export const IP = () => {
  const { toggle } = useZustand();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Free IP Address Lookup &
            <span className="block bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              Reputation Checker
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Check your public IPv4 or IPv6 address, ISP information,
            geolocation, blacklist status, VPN/Tor detection,
            abuse reports, and overall risk score instantly.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        <ScrollReveal distance={40} duration={0.7}>
          {toggle ? <IPDetail /> : <CheckIp />}
        </ScrollReveal>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 flex items-center justify-center">
        <ScrollReveal distance={32} duration={0.55} delay={0.1}>
          <TrustLine />
        </ScrollReveal>
      </section>

    </div>
  );
};
