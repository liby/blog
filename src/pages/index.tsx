import Head from "next/head";
import Link from "next/link";
import DateFormat from "#components/date";
import style9 from "style9";
import Layout, { siteTitle } from "#components/layout";
import { utilStyles } from "#components/utils.styled";
import { InferGetStaticPropsType } from "next";
import { allBlogs } from "contentlayer/generated";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={style9(utilStyles.headingMd)}>
        <p>
          Hello, I&#39;m <strong>Bryan</strong>. I&#39;m a Front-end development
          engineer. You can contact me on{" "}
          <a href={"https://twitter.com/meetliby"}>Twitter</a>.
        </p>
        <p>
          (This is a sample website - the source code is{" "}
          <a href="https://github.com/liby/blog">here</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={style9(utilStyles.headingMd, utilStyles.padding1px)}>
        <h2 className={style9(utilStyles.headingLg)}>Blog</h2>
        <ul className={style9(utilStyles.list)}>
          {posts.map(({ publishedAt, title, slug, readingTime }) => (
            <li className={style9(utilStyles.listItem)} key={title}>
              <Link href={`/blog/${slug}`}>
                {title}
              </Link>
              <br />
              <small className={style9(utilStyles.lightText)}>
                <DateFormat dateString={publishedAt} /> &mdash;{" "}
                {readingTime.text}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export const getStaticProps = () => {
  const posts = allBlogs;

  return { props: { posts } };
};
