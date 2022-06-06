import Layout from "#components/layout";
import { utilStyles } from "#styles/utils.styled";
import Head from "next/head";
import style9 from "style9";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allOtherPages, type OtherPage } from "contentlayer/generated";

export default function About({ title, body, wordCount }: OtherPage) {
  const Component = useMDXComponent(body.code);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={style9(utilStyles.headingXl)}>{title}</h1>
        <div>
          <Component />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = allOtherPages.find((page) => page.slug === "about")!;

  return { props: data };
}
