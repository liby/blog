import Head from "next/head";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { GeistProvider, CssBaseline, Image } from "@geist-ui/core";
import { useCallback, useState, useEffect, useRef } from "react";
import { Configs } from "#utils/variables";
import { MDXProvider } from "@mdx-js/react";
import { HybridCode, HybridLink } from "#components/mdx";
import { PrismBaseline } from "@geist-ui/prism";
import useDomClean from "#utils/use-dom-clean";
import BlogConfigsProvider from "#utils/blog-configs-provider";

const Application: NextPage<AppProps<unknown>> = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState("light");
  const regionLoadRef = useRef(false);

  const changeHandle = useCallback((isDark: boolean) => {
    const next = isDark ? "light" : "dark";
    setThemeType(next);
  }, []);

  useEffect(() => {
    if (!regionLoadRef.current) {
      if (typeof localStorage !== "object") return;

      setThemeType(localStorage.getItem("theme") === "dark" ? "dark" : "light");
      regionLoadRef.current = true;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeType);
  }, [themeType]);
  useDomClean();

  return (
    <>
      <Head>
        <title>{Configs.title}</title>
        <meta name="google" content="notranslate" />
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content={Configs.description} />
        <meta property="og:site_name" content={Configs.title} />
        <meta property="og:description" content={Configs.description} />
        <meta property="og:type" content="website" />
        <meta name="generator" content="liby.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content={Configs.author} />
        <meta name="twitter:creator" content={`@${Configs.twitter}`} />
        <meta property="og:title" content={Configs.title} />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PrismBaseline />
        <MDXProvider
          components={{
            a: HybridLink,
            img: (props) => <Image src={props.src!} alt={props.alt} />,
            pre: HybridCode,
          }}
        >
          <BlogConfigsProvider onChange={changeHandle}>
            <Component {...pageProps} />
          </BlogConfigsProvider>
        </MDXProvider>
        <style global jsx>{`
          @media only screen and (max-width: 767px) {
            html {
              font-size: 15px;
            }
          }
        `}</style>
      </GeistProvider>
    </>
  );
};

export default Application;
