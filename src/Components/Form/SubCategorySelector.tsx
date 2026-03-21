import { MultiSelect } from '@mantine/core';
import type { Category } from '../../Data/categories';

type Props = {
  mainCategory: string;
  categories: Category[];
  selected: string[];
  onToggle: (id: string) => void;
};

export default function SubCategorySelector({
  mainCategory,
  categories,
  selected,
  onToggle,
}: Props) {
  if (!mainCategory) return null;

  const subCategories = categories.filter((c) => c.parentId === mainCategory);

  return (
    <MultiSelect
      label='Underkategorier'
      placeholder='Välj underkategorier'
      searchable
      value={selected}
      onChange={(vals) => {
        const added = vals.filter((v) => !selected.includes(v));
        const removed = selected.filter((v) => !vals.includes(v));

        added.forEach(onToggle);
        removed.forEach(onToggle);
      }}
      data={subCategories.map((c) => ({
        value: c.id,
        label: c.title,
      }))}
    />
  );
}
