[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fliby%2Fblog)

> **Note**
>
> This Blog is **heavily** inspired by [Lee Robinson](https://github.com/leerob/leerob.io)

# Tech Stack

- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Framework**: [Next.js](https://nextjs.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Style**: [Style9](https://github.com/johanholmerin/style9)

## Overview

- `content/*` - MDX data that is used for blogs and code snippets.
- `public/*` - Static assets including fonts and images.
- `scripts/*` - Two useful scripts to generate a RSS feed and a sitemap.
- `src/components/*` - The different page layouts each MDX category (blog, snippets) uses.
- `src/pages/blog/*` - Static pre-rendered blog pages using MDX.
- `src/pages/*` - All other static pages.
- `src/styles/*` - A small amount of global styles. I'm mostly using Style9.
- `src/utils/*` - A collection of helpful utilities or code for external services.

## Running Locally

```bash
$ git clone git@github.com:liby/blog.git
$ cd blog
$ pnpm install
$ pnpm run dev
```

## Cloning / Forking

Please review the [license](https://github.com/leerob/leerob.io/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.).
