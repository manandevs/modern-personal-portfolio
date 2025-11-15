"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

interface LenisScrollProps {
  children?: React.ReactNode;
}

const LenisScroll: React.FC<LenisScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};

export default LenisScroll;
