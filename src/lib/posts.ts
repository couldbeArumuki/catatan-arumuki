import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const getPostSlug = (post: Post) => post.id.replace(/\\.mdx?$/, '');

export const sortPostsByDateDesc = (posts: Post[]) =>
  [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const getCategoryCounts = (posts: Post[]) => {
  const counts = new Map<string, number>();
  posts.forEach((post) => {
    counts.set(post.data.category, (counts.get(post.data.category) ?? 0) + 1);
  });

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const getTagCounts = (posts: Post[]) => {
  const counts = new Map<string, number>();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
};

export const groupPostsByYear = (posts: Post[]) => {
  const groups = new Map<number, Post[]>();
  posts.forEach((post) => {
    const year = post.data.date.getFullYear();
    const existing = groups.get(year) ?? [];
    existing.push(post);
    groups.set(year, existing);
  });

  return Array.from(groups.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, yearPosts]) => ({
      year,
      posts: sortPostsByDateDesc(yearPosts),
    }));
};
