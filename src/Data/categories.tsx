import { slugify } from '../Utils/slugify';

export type Category = {
  id: string;
  title: string;
  path?: string;
  parentId?: string;
};

const create = (category: Omit<Category, 'id'>): Category => {
  const id = slugify(category.title);

  return {
    ...category,
    id,
  };
};

export const categories: Category[] = [
  create({ title: 'Mat', path: '/mat' }),
  create({ title: 'Frukost', path: '/mat/frukost', parentId: 'mat' }),
  create({ title: 'Lunch', path: '/mat/lunch', parentId: 'mat' }),
  create({ title: 'Middag', path: '/mat/middag', parentId: 'mat' }),

  create({ title: 'Efterrätt', path: '/efterratt' }),
  create({ title: 'Glass', path: '/efterratt/glass', parentId: 'efterratt' }),
  create({ title: 'Paj', path: '/efterratt/paj', parentId: 'efterratt' }),
  create({
    title: 'Choklad',
    path: '/efterratt/choklad',
    parentId: 'efterratt',
  }),

  create({ title: 'Bakat', path: '/bakat' }),
  create({ title: 'Kladdkaka', path: '/bakat/kladdkaka', parentId: 'bakat' }),
  create({
    title: 'Muffins och cupcakes',
    path: '/bakat/muffins-och-cupcakes',
    parentId: 'bakat',
  }),
  create({
    title: 'Mjuka kakor',
    path: '/bakat/mjuka-kakor',
    parentId: 'bakat',
  }),
  create({
    title: 'Kakor och cookies',
    path: '/bakat/kakor-och-cookies',
    parentId: 'bakat',
  }),

  create({ title: 'Snacks', path: '/snacks' }),
  create({ title: 'Chips', path: '/snacks/chips', parentId: 'snacks' }),
  create({ title: 'Popcorn', path: '/snacks/popcorn', parentId: 'snacks' }),
  create({ title: 'Nötter', path: '/snacks/notter', parentId: 'snacks' }),
  create({ title: 'Godis', path: '/snacks/godis', parentId: 'snacks' }),

  create({ title: 'Dryck', path: '/dryck' }),
  create({ title: 'Smoothie', path: '/dryck/smoothie', parentId: 'dryck' }),
  create({ title: 'Juice', path: '/dryck/juice', parentId: 'dryck' }),
  create({ title: 'Cocktail', path: '/dryck/cocktail', parentId: 'dryck' }),
];
