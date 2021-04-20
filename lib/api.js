import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_content');

export function getPostBySlug(path, slug, fields = []) {
  if (fields.length === 0) {
    fields.push('slug', 'title', 'excerpt', 'image', 'date', 'content');
  }

  const fullPath = join(postsDirectory, path, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items = {};

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(path, fields = []) {
  const slugs = getPostsSlugs(path);
  const posts = slugs
    .map(slug => getPostBySlug(path, slug, fields));
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsSlugs(path) {
  return fs.readdirSync(`${postsDirectory}/${path}`)
    .map(slug => slug.replace(/\.md$/, ''));
}
