import Layout from "#components/layout";
import { allBlogs } from "contentlayer/generated";
import Posts from "#components/posts";

export default function Home() {
  return (
    <Layout>
      <Posts isLatest />
    </Layout>
  );
}
export const getStaticProps = () => {
  const posts = allBlogs;

  return { props: { posts } };
};
