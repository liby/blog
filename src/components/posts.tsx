import Head from "next/head";
import { useMemo } from "react";
import NextLink from "next/link";
import { useTheme, Link } from "@geist-ui/core";
import { Configs } from "#utils/variables";
import { allBlogs, Blog } from "contentlayer/generated";
import DateFormat from "#components/date";
import PostItem from "./post-item";

const getMoreLink = (len: number): React.ReactNode => {
  if (len < Configs.latestLimit) return null;
  return (
    <NextLink href="/blog" passHref>
      <Link title="More">...</Link>
    </NextLink>
  );
};

const getLatest = (data: Blog[], isLatest?: boolean) => {
  if (!isLatest) return data;
  return data.slice(0, Configs.latestLimit);
};

const getTitle = (isLatest?: boolean): string => {
  if (!isLatest) return Configs.labels.list;
  return Configs.labels.latest;
};

export interface PostsProps {
  isLatest?: boolean;
}

const Posts = ({ isLatest = false }: PostsProps) => {
  const theme = useTheme();
  const posts = useMemo(() => getLatest(allBlogs, isLatest), [isLatest]);
  const title = useMemo(() => getTitle(isLatest), [isLatest]);

  return (
    <section>
      <Head>
        {!isLatest && (
          <title>
            {getTitle(false)} - {Configs.title}
          </title>
        )}
      </Head>
      <h2>{title}</h2>
      <div className="content">
        {posts.map((post) => (
          <PostItem post={post} key={post.slug} />
        ))}
        {isLatest && <span className="more">{getMoreLink(posts.length)}</span>}
      </div>
      <style jsx>{`
        section {
          margin-top: calc(${theme.layout.gap} * 2);
        }

        section h2 {
          font-size: 0.8rem;
          color: ${theme.palette.accents_6};
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 2px solid ${theme.palette.accents_6};
          padding: 2px ${theme.layout.gapQuarter} 0 0;
          display: inline-block;
          margin: 0;
        }

        .content {
          margin: ${theme.layout.gap} 0;
        }

        .more {
          display: block;
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          section {
            margin-top: ${theme.layout.gapQuarter};
          }

          section h2 {
            margin-top: calc(1.5 * ${theme.layout.gap});
          }
        }
      `}</style>
    </section>
  );
};

export default Posts;
