import { useState } from 'react';
import {
  Fieldset,
  TextInput,
  NativeSelect,
  Textarea,
  NumberInput,
  Container,
  Stack,
  Title,
  Button,
} from '@mantine/core';
import SubCategorySelector from './SubCategorySelector';
import TagSelector from './TagSelector';
import ImageUpload from './ImageUpload';
import { categories } from '../../Data/categories';
import { tags as allTagOptions, type Tag } from '../../Data/tags';
import IngredientInput from './IngredientInput';
import InstructionsInput from './InstructionsInput';

export default function Form() {
  const [file, setFile] = useState<File | null>(null);
  const [mainCategory, setMainCategory] = useState('');
  const [subCategoriesSelected, setSubCategoriesSelected] = useState<string[]>(
    [],
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>(allTagOptions);

  const rootCategories = categories.filter((c) => !c.parentId);

  const toggleSub = (id: string) =>
    setSubCategoriesSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  const createTag = (label: string) => {
    const newTag: Tag = { id: label.toLowerCase().replace(/\s+/g, '-'), label };
    if (!allTags.some((t) => t.label.toLowerCase() === label.toLowerCase())) {
      setAllTags((prev) => [...prev, newTag]);
    }
    if (!selectedTags.includes(label))
      setSelectedTags((prev) => [...prev, label]);
  };

  return (
    <Container size='sm'>
      <Fieldset legend={<Title order={2}>Lägg till nytt recept</Title>}>
        <Stack gap='lg'>
          <TextInput label='Titel' />

          <Textarea label='Beskrivning' autosize minRows={2} maxRows={4} />

          <NativeSelect
            label='Huvudkategori'
            value={mainCategory}
            onChange={(e) => {
              setMainCategory(e.currentTarget.value);
              setSubCategoriesSelected([]);
            }}
            data={[
              { value: '', label: 'Välj kategori' },
              ...rootCategories.map((c) => ({ value: c.id, label: c.title })),
            ]}
          />

          {categories.some((c) => c.parentId === mainCategory) && (
            <SubCategorySelector
              mainCategory={mainCategory}
              categories={categories}
              selected={subCategoriesSelected}
              onToggle={toggleSub}
            />
          )}

          <TagSelector
            selected={selectedTags}
            allTags={allTags}
            onToggle={toggleTag}
            onCreate={createTag}
          />

          <ImageUpload file={file} setFile={setFile} />

          <NumberInput label='Antal portioner' min={1} max={20} />

          <IngredientInput />

          <InstructionsInput />

          <Button>Spara</Button>
        </Stack>
      </Fieldset>
    </Container>
  );
}

export type Recipe = {
  ingredients?: string[];
  instructions?: string[];
};
