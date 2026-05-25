import type { Post } from './posts';
import { getCategoryCounts, getPostSlug, getTagCounts, sortPostsByDateDesc } from './posts';

const aboutText =
  'A quiet space for diary notes, travel sketches, and short reflections. Pull up a chair and linger.';

export const buildSidebar = (posts: Post[]) => {
  const sorted = sortPostsByDateDesc(posts);
  const popularPosts = posts.filter((post) => post.data.popular);
  const sortedPopularPosts = [...popularPosts].sort((a, b) => {
    const aPopularity = a.data.popularity;
    const bPopularity = b.data.popularity;

    if (aPopularity != null || bPopularity != null) {
      if (aPopularity == null) return 1;
      if (bPopularity == null) return -1;
      if (bPopularity !== aPopularity) return bPopularity - aPopularity;
    }

    return b.data.date.valueOf() - a.data.date.valueOf();
  });

  return {
    aboutText,
    categories: getCategoryCounts(posts),
    tags: getTagCounts(posts),
    popularPosts: sortedPopularPosts.slice(0, 4).map((post) => ({
      slug: getPostSlug(post),
      title: post.data.title,
      date: post.data.date,
      coverImage: post.data.coverImage,
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
