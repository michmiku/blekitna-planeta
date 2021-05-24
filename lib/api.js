import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(url) {
  const fullPath = join(postsDirectory, url);
  return fs.readdirSync(fullPath);
}

export function getPostBySlug(slug, fields = [], url) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, url, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = [], url = "/") {
  const slugs = getPostSlugs(url);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, url))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
