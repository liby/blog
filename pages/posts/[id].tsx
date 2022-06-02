import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../utils/posts";
import Date from "../../components/date";
import style9 from "style9";
import { utilStyles } from "../../components/utils.styled";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = typeof params?.id === "string" ? params.id : "404";
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={style9(utilStyles.headingXl)}>{postData.title}</h1>
        <div className={style9(utilStyles.lightText)}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}