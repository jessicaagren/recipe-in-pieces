export type Category = {
  id: string;
  title: string;
  path?: string;
  parentId?: string;
};

export const categories: Category[] = [
  { id: 'mat', title: 'Mat', path: '/mat' },
  { id: 'frukost', title: 'Frukost', path: '/mat/frukost', parentId: 'mat' },
  { id: 'lunch', title: 'Lunch', path: '/mat/lunch', parentId: 'mat' },
  { id: 'middag', title: 'Middag', path: '/mat/middag', parentId: 'mat' },

  { id: 'bakat', title: 'Bakat', path: '/bakat' },
  {
    id: 'kladdkaka',
    title: 'Kladdkaka',
    path: '/bakat/kladdkaka',
    parentId: 'bakat',
  },
  {
    id: 'muffins-och-cupcakes',
    title: 'Muffins och cupcakes',
    path: '/bakat/muffins-och-cupcakes',
    parentId: 'bakat',
  },
  {
    id: 'mjuka-kakor',
    title: 'Mjuka kakor',
    path: '/bakat/mjuka-kakor',
    parentId: 'bakat',
  },
  {
    id: 'kakor-och-cookies',
    title: 'Kakor och cookies',
    path: '/bakat/kakor-och-cookies',
    parentId: 'bakat',
  },

  { id: 'snacks', title: 'Snacks', path: '/snacks' },
];
