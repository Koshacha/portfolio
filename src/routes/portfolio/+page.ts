import type { Post } from '$lib/types';

export async function load({ fetch, url }) {
  const response = await fetch('api/posts');
  const data: {
    posts: Post[];
    categories: string[];
  } = await response.json();
  return { data, url: url.pathname };
}
