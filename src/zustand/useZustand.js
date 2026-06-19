import { create } from "zustand";
import axios from "axios";

export const useZustand = create((set, get) => ({
  idleColor: "gray",
  toggle: false,

  ip: "",
  ipv4: "",
  ipv6: "",

  loading: false,
  err: "",
  data: null,

  setData: (data) => set({ data }),
  setIp: (ip) => set({ ip }),
  setToggle: (toggle) => set({ toggle }),

  // 1. Get both IPs
  getPublicIp: async () => {
    try {
      const [ipv4Res, ipv6Res] = await Promise.all([
        fetch("https://api.ipify.org?format=json").then((r) => r.json()),
        fetch("https://api64.ipify.org?format=json").then((r) => r.json()),
      ]);

      const ipv4 = ipv4Res?.ip || null;
      const ipv6 = ipv6Res?.ip || null;

      set({
        ipv4,
        ipv6,
        ip: ipv4 || ipv6,
      });

      return { ipv4, ipv6 };
    } catch (err) {
      set({ err: err.message });
      return { ipv4: null, ipv6: null };
    }
  },

  getIp: async () => {
    try {
      set({ loading: true, err: "" });

      // correct call
      const { ipv4, ipv6 } = await get().getPublicIp();

      const res = await axios.post(
        "https://cb7a-182-93-84-13.ngrok-free.app/api/reputation",
        {
          ipv4,
          ipv6,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      console.log("Res",res.data);
      set({
        loading: false,
        data: res.data,
      });
    } catch (err) {
      set({
        loading: false,
        err: err.message,
      });
    }
  },
}));