import "../styles/globals.css";
import "../styles/main.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Jordan Smith</title>
        <meta name="description" content="undefined" key="description" />

        <meta property="og:url" content="https://jordansmith.cc/" key="url" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:title" content="Jordan Smith" key="title" />
        <meta
          property="og:description"
          content="front-end web developer landing page with latest projects and github links"
          key="description"
        />
        <meta property="og:image" content="../public/thumb.png" />

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
        <meta name="twitter:title" content="Jordan Smith" key="twitter-title" />
        <meta
          name="twitter:description"
          content="front-end web developer landing page with latest projects and github links"
          key="twitter-description"
        />
        <meta
          name="twitter:image"
          content="../public/thumb.png"
          key="twitter-content"
        />
      </Head>
    </>
  );
}

export default MyApp;
