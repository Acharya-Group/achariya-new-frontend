"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
