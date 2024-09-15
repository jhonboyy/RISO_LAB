import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Jhon Boy" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Jhon Boy Riso Lab is an experimental app that improves the process of risograph printing"
        />
        <meta property="og:url" content="https://jhonboyy.github.io/riso_lab/" />
        <meta property="og:title" content="Jhon Boy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jhon Boy Riso Lab" />
        <meta
          name="keywords"
          content="jhon boy, riso, risograph, printing, app, tool"
        />
        <link
          rel="canonical"
          href="https://jhonboyy.github.io/riso_lab/"
        />
        <link rel="icon" href="/images/jhon-boy-favicon.svg" />
        <link
          rel="mask-icon"
          href="/images/jhon-boy-favicon.svg"
          color="#FFFFFF"
        />
        <link rel="apple-touch-icon" href="/images/jhon-boy-favicon.svg" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"></script>
        <script src="/p5.min.js"></script>
        <script src="/p5.riso.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="/scripts.js"></script>
      <script src="/final.js"></script>
    </Html>
  );
}
