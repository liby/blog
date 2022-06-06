import { utilStyles } from "#styles/utils.styled";
import { Html, Head, Main, NextScript } from "next/document";
import style9 from "style9";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <body
        className={style9(utilStyles.documentBody, utilStyles.documentBodyDark)}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
