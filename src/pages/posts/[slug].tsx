import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Date from "../../components/date";
import style9 from "style9";
import { utilStyles } from "../../components/utils.styled";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostSlugs, getPostDataFromSlug } from "../../utils/blog";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostDetails } from "../../types/blog.type";

interface Props {
  post: {
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
    details: PostDetails;
  };
}

export default function Post({ post: { mdxSource, details } }: Props) {
  return (
    <Layout>
      <Head>
        <title>{details.title} | My blog</title>
      </Head>
      <article>
        <h1 className={style9(utilStyles.headingXl)}>{details.title}</h1>
        <div className={style9(utilStyles.lightText)}>
          <Date dateString={details.date} /> &mdash; {details.readingTime}
        </div>
        <div>
          <MDXRemote {...mdxSource} components={{ Image }} />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getAllPostSlugs()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "404";
  const { content, details } = await getPostDataFromSlug(slug, {
    cwd: "source/posts",
  });

  const mdxSource = await serialize(content);

  return {
    props: {
      post: {
        mdxSource,
        details,
      },
    },
  };
};
