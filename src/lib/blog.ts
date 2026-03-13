import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface PostMeta {
  title: string;
  date: string;
  summary: string;
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getPosts(): PostMeta[] {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        ...(matterResult.data as Omit<PostMeta, 'slug'>),
        slug: matterResult.data.slug || fileName.replace(/\.md$/, ''),
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      ...(matterResult.data as Omit<PostMeta, 'slug'>),
      slug: matterResult.data.slug || slug,
      content: matterResult.content,
    };
  } catch (error) {
    return null;
  }
}
