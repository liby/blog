import style9 from "style9";
import { layoutStyles } from "./layout.styled";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { utilStyles } from "./utils.styled";
import { PropsWithChildren } from "react";

export const name = "Bryan Lee";
export const siteTitle = "Next.js Blog Website";

interface Props {
  home?: boolean;
}

export default function Layout({
  children,
  home = false,
}: PropsWithChildren<Props>) {
  return (
    <div className={style9(layoutStyles.container)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={style9(layoutStyles.header)}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={style9(utilStyles.borderCircle)}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={style9(utilStyles.heading2Xl)}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={style9(utilStyles.borderCircle)}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={style9(utilStyles.headingLg)}>
              <Link href="/">
                <a className={style9(utilStyles.colorInherit)}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={style9(layoutStyles.backToHome)}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
