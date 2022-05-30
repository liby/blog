import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date';
import style9 from 'style9';
import Layout, { siteTitle, name } from '../components/layout';
import { utilStyles } from '../components/utils.styled';
import { getSortedPostsData, PostData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

interface Props {
  allPostsData: PostData[]
}
export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={style9(utilStyles.headingMd)}>
        <p>
          Hello, I&#39;m <strong>Bryan</strong>. I&#39;m a Front-end development engineer. You can contact me on <a href={"https://twitter.com/meetliby"}>Twitter</a>.
        </p>
        <p>
          (This is a sample website - the source code is {' '}
          <a href="https://github.com/liby/blog">here</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={style9(utilStyles.headingMd, utilStyles.padding1px)}>
        <h2 className={style9(utilStyles.headingLg)}>Blog</h2>
        <ul className={style9(utilStyles.list)} >
          {allPostsData.map(({ id, date, title }) => (
            <li className={style9(utilStyles.listItem)} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={style9(utilStyles.lightText)}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}