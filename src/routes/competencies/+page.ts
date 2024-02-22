import obj from '$lib/consts/skills.json';
import type { Skills } from '$lib/types';
import cloneDeep from 'lodash/cloneDeep';

export async function load() {
  const skills: Skills = {};
  const skillsData = cloneDeep(obj);

  const imagesGlob = import.meta.glob('/static/images/skills/*', {
    query: { w: 64, h: 64, quality: 100 },
    eager: true
  }) as Record<string, { default: string }>;

  for (const [key, icons] of Object.entries(skillsData)) {
    icons.forEach((o) => {
      const fullPath = `/static${o.img}`;
      if (fullPath in imagesGlob && !imagesGlob[fullPath].default.startsWith('/static')) {
        o.img = imagesGlob[fullPath].default;
      }
    });
    skills[key] = icons;
  }

  return { skills, wideLayout: true };
}
