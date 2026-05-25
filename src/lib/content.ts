import { getCollection } from 'astro:content';
import { sortPostsByDateDesc } from './posts';

export const getVisiblePosts = async () => {
  const posts = await getCollection('posts');
  return sortPostsByDateDesc(posts.filter((post) => !post.data.draft));
};
