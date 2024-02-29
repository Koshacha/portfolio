import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';

export async function load({ params }) {
  try {
    const post = await import(`@/posts/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}

export const entries: EntryGenerator = () => {
  const slugs = [];
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const slug = path.split('/').at(-1)?.replace('.md', '') as string;
    slugs.push({ slug });
  }

  return slugs;
};

export const prerender = true;
