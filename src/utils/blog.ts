import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { PostDetails } from "../types/blog.type";

const PATH = path.resolve(process.cwd(), "src");
const BLOG_DIR = path.resolve(PATH, "source", "posts");

export async function getAllPostSlugs() {
  const postSlugs = (await fs.promises.readdir(BLOG_DIR))
    .filter((file) => file.endsWith(".mdx"))
    .map((slug) => slug.replace(/\.mdx?$/, ""));
  return postSlugs;
}

export async function getPostDataFromSlug(
  slug: string,
  options?: {
    cwd: string;
  }
): Promise<{
  content: string;
  details: PostDetails;
}> {
  const postDir = path.resolve(PATH, ...(options?.cwd ?? "source").split("/"));
  const fullPath = path.resolve(postDir ?? BLOG_DIR, `${slug}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  return {
    content,
    details: {
      slug,
      summary: data.summary,
      title: data.title,
      date: data.publishedAt,
      published: data.published,
      readingTime: readingTime(fileContents).text,
      ...data,
    },
  };
}

// export async function getAllPosts() {
//   const pathDir = path.resolve(process.cwd(), "src", "source/posts");

//   const articles = fs.readdirSync(path.join(process.cwd(), "src/source/posts"));

//   return articles.reduce((allArticles, articleSlug) => {
//     // get parsed data from mdx files in the "articles" dir
//     const source = fs.readFileSync(
//       path.join(process.cwd(), "src/source/posts", articleSlug),
//       "utf-8"
//     );
//     const { data } = matter(source);

//     return [
//       {
//         ...data,
//         slug: articleSlug.replace(".mdx", ""),
//         readingTime: readingTime(source).text,
//         date: data.publishedAt,
//       },
//       ...allArticles,
//     ];
//   }, []);
// }

export async function getAllPosts() {
  const files = (await fs.promises.readdir(BLOG_DIR)).filter((file) =>
    file.endsWith(".mdx")
  );

  const postsData = (
    await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx?$/, "");
        const result = await getPostDataFromSlug(slug, {
          cwd: "source/posts",
        });

        return {
          ...result.details,
        };
      })
    )
  )
    .filter(
      ({ published }) => process.env.NODE_ENV === "development" || published
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  console.log(postsData);
  return postsData;
}

// export async function getRootPagesSlugs() {
//   /**
//    * so Next.js (correctly) prevents us from building a website wherein we're
//    * trying to dynamically trying to create a page that _already_ exists
//    * "statically" - in our repo this can be seen when using our traditional
//    * approach we were creating pages for all the .mdx files in from the /content
//    * dir, but we've already defined a pages/about.tsx
//    *
//    * to counter this, we'll add logic here in order to only create static paths
//    * for pages that _dont_ exist already
//    */

//   const MAIN_DIR = path.resolve(process.cwd(), "src", "source");
//   const ROOT_PAGES_DIR = path.resolve(process.cwd(), "src", "pages");

//   const files = (await fs.readdir(MAIN_DIR)).filter((file) =>
//     file.endsWith(".mdx")
//   );
//   const existingRootPageFiles = (await fs.readdir(ROOT_PAGES_DIR))
//     .filter((file) => file.endsWith(".tsx"))
//     .map((file) => file.replace(/\.tsx?$/, ""));

//   const pagesData: Array<{ page: string }> = files
//     .map((file) => ({
//       page: file.replace(/\.mdx?$/, ""),
//     }))
//     .filter(({ page }) => existingRootPageFiles.indexOf(page) === -1);

//   const pagesDataWithContent = pagesData.map((data) => ({
//     ...data,
//   }));

//   return pagesDataWithContent;
// }
