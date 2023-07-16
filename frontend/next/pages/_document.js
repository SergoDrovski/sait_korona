import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="ru">
        <Head>
            <Script
                src="//ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"
                strategy="lazyOnload"
            />
            <Script
                src="https://www.google.com/recaptcha/api.js"
                strategy="lazyOnload"
            />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
