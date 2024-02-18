export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  sort: number;
  legacy?: boolean;
  categories: string[];
  stack: string[];
  published: boolean;
  wip?: boolean;
  colspan?: boolean;
  rowspan?: boolean;
};

export type Tech = {
  name: string;
  img: string;
};

export type Skills = Record<string, Tech[]>;
