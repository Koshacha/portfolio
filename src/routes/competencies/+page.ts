import type { Load } from '@sveltejs/kit';
import skills from '$lib/consts/skills.json';

export const load: Load = () => {
  return {
    skills,
    wideLayout: true
  };
};
