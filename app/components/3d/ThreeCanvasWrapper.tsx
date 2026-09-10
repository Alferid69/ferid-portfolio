"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
  loading: () => null,
});

export default function ThreeCanvasWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer mounting heavy 3D WebGL universe until critical UI has rendered and main thread is idle
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        () => setShouldLoad(true),
        { timeout: 1200 }
      );
      return () => {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
      };
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldLoad) return null;

  return <ThreeBackground />;
}
