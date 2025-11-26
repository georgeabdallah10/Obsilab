"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  clearQueuedScrollTarget,
  getQueuedScrollTarget,
  scrollToHash,
} from "../lib/scroll";

export const ScrollManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const target = getQueuedScrollTarget() || window.location.hash;
    if (!target) return;

    const timeout = window.setTimeout(() => {
      const didScroll = scrollToHash(target);
      if (didScroll) {
        clearQueuedScrollTarget();
      }
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
};
