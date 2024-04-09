"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "../_utils";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    process.env.GA_MEASUREMENT_ID &&
      analytics.gaPageView(
        { action: "page_view" },
        process.env.GA_MEASUREMENT_ID
      );
  }, [pathname, searchParams]);

  return null;
}
