export type Tag = {
  id: string;
  label: string;
  categoryIds?: string[]; // vilka kategorier den hör till
};

export const tags: Tag[] = [
  { id: 'vegansk', label: 'Vegansk', categoryIds: ['mat'] },
  { id: 'snabb', label: 'Snabb', categoryIds: ['mat', 'snacks'] },
  { id: 'glutenfri', label: 'Glutenfri' },
];
