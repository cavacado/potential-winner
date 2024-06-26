"use client";
import React from "react";
import Script from "next/script";
import { analytics } from "../_utils";

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
        id={"gtag-1"}
        dangerouslySetInnerHTML={{
          __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}', ${JSON.stringify(
            analytics.GA_CONFIG_OPTION
          )});`,
        }}
      />
      <Script
        id={"gtag-2"}
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
}
