import "../styles/globals.css";
import "../styles/main.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Jordan Smith</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="frontend web developer javascript react.js next.js"
          key="description"
        />

        <meta property="og:url" content="https://jordansmith.cc/" key="url" />
        <meta property="og:type" content="website" key="type" />
        <meta
          property="og:title"
          content="Jordan Smith - Frontend Developer"
          key="title"
        />
        <meta
          property="og:description"
          content="Frontend Developer working in React.js"
          key="description"
        />
        <meta property="og:image" content="" key="image" />

        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter-card"
        />
        <meta
          property="twitter:domain"
          content="jordansmith.cc"
          key="twitter-domain"
        />
        <meta
          property="twitter:url"
          content="https://jordansmith.cc/"
          key="twitter-url"
        />
        <meta
          name="twitter:title"
          content="Jordan Smith - Frontend Developer"
          key="twitter-title"
        />
        <meta
          name="twitter:description"
          content="Frontend Developer working in React.js"
          key="twitter-description"
        />
        <meta name="twitter:image" content="" key="twitter-content" />
      </Head>
    </>
  );
}

export default MyApp;
