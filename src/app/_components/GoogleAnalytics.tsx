"use client";
import React from "react";
import Script from "next/script";
import { GA_CONFIG_OPTION } from "../_utils/analytics";

interface GoogleAnalyticsProps {
  gaId: string;
  dataLayerName?: string;
}

/**
 * Note that at some point in time, when @next/third-parties
 * becomes stable, we should switch over to that. (It is
 * currently experimental)
 */
export function GoogleAnalytics(props: GoogleAnalyticsProps) {
  const { gaId, dataLayerName = "dataLayer" } = props;

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');`,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
}
