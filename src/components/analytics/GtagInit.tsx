"use client";

import Script from "next/script";

const GA_ID = "G-HXCR5SS2S5";
const AW_ID = "AW-17856467818";
const AW_PHONE_LABEL = "AW-17856467818/_DtwCJ_CsaodEOqm0MJC";

export function GtagInit() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');gtag('config','${AW_ID}');gtag('config','${AW_PHONE_LABEL}',{'phone_conversion_number':'437-344-8490'});`}
      </Script>
    </>
  );
}
