import { slugify } from '../Utils/slugify';

export type Tag = {
  id: string;
  label: string;
};

const create = (tag: Omit<Tag, 'id'>): Tag => {
  const id = slugify(tag.label);

  return {
    ...tag,
    id,
  };
};

export const tags: Tag[] = [
  create({ label: 'Vegetarisk' }),
  create({ label: 'Vegansk' }),
  create({ label: 'Snabb' }),
  create({ label: 'Small batch' }),
  create({ label: 'Sött' }),
  create({ label: 'Choklad' }),
  create({ label: 'Vanilj' }),
  create({ label: 'Tofu' }),
  create({ label: 'Nudlar' }),
  create({ label: 'Pasta' }),
];
