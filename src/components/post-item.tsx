import { Link, useTheme } from '@geist-ui/core'
import { Blog } from 'contentlayer/generated'
import NextLink from 'next/link'

const options: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const getDateString = (date: string = ''): string => {
  const d = new Date(date)
  if (`${d}` === 'Invalid Date') return ''
  return new Date(date).toLocaleString('zh-cn', options).replace('日', '日, &nbsp;')
}


const PostItem = ({ post }: {post: Blog}) => {
  const theme = useTheme()

  return (
    <div className="item">
      <NextLink href={`/blog/${post.slug}`} as={`/blog/${post.slug}`} passHref>
        <Link>
          {post.title}
          <span
            className="date"
            dangerouslySetInnerHTML={{ __html: getDateString(post.publishedAt) }}
          />
        </Link>
      </NextLink>
      <style jsx>{`
        .item {
          margin-bottom: calc(1.35 * ${theme.layout.gapHalf});
          overflow: hidden;
          max-width: 60vw;
        }

        .item :global(.link) {
          color: ${theme.palette.accents_7};
          transition: color 120ms ease;
          font-size: 0.95rem;
          max-width: 95%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }

        .date {
          color: ${theme.palette.accents_5};
          font-size: 0.75em;
          display: block;
          line-height: 1.5rem;
        }

        .item :global(.link:hover) {
          color: ${theme.palette.accents_3};
        }

        .item :global(.link:hover .date) {
          color: ${theme.palette.accents_3};
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .item {
            max-width: 90vw;
          }

          .item :global(.link) {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </div>
  )
}

export default PostItem
