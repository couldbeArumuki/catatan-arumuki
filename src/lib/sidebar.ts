import type { Post } from './posts';
import { getCategoryCounts, getPostSlug, getTagCounts, sortPostsByDateDesc } from './posts';

const aboutText =
  'A quiet space for diary notes, travel sketches, and short reflections. Pull up a chair and linger.';

export const buildSidebar = (posts: Post[]) => {
  const sorted = sortPostsByDateDesc(posts);

  return {
    aboutText,
    categories: getCategoryCounts(posts),
    tags: getTagCounts(posts),
    latestPosts: sorted.slice(0, 5).map((post) => ({
      slug: getPostSlug(post),
      title: post.data.title,
      date: post.data.date,
    })),
    searchIndex: sorted.map((post) => ({
      slug: getPostSlug(post),
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
      tags: post.data.tags ?? [],
    })),
  };
};
