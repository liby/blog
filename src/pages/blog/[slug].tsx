import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs, type Blog } from "contentlayer/generated";
import Layout from "#components/layout";
import DateFormat from "#components/date";
import style9 from "style9";
import { utilStyles } from "#styles/utils.styled";
import Head from "next/head";

interface Params {
  params: {
    slug: string;
  };
}

interface Props {
  post: Blog;
}
export default function Post({ post }: Props) {
  const Component = useMDXComponent(post.body.code);

  return (
    <Layout>
      <Head>
        <title>{post.title} | My blog</title>
      </Head>
      <article>
        <h1 className={style9(utilStyles.headingXl)}>{post.title}</h1>
        <div className={style9(utilStyles.lightText)}>
          <DateFormat dateString={post.publishedAt} /> &mdash; {post.readingTime.text}
        </div>
        <div>
          <Component />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const post = allBlogs.find((post) => post.slug === params.slug)!;

  return { props: { post } };
}
