import { writeFileSync } from "fs";
import RSS from "rss";
import { allPosts } from "../.contentlayer/generated/Post/_index.mjs";

async function generate() {
  const feed = new RSS({
    title: "Bryan",
    site_url: "https://liby.github.io/",
    feed_url: "https://liby.github.io/feed.xml",
  });

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://liby.github.io/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
