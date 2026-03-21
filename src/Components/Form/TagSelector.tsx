import { useState } from 'react';
import { Combobox, PillsInput, Pill, Group, CheckIcon } from '@mantine/core';
import { useCombobox } from '@mantine/core';
import type { Tag } from '../../Data/tags';
import { FaPlus } from 'react-icons/fa6';

type Props = {
  selected: string[];
  allTags: Tag[];
  onToggle: (tag: string) => void;
  onCreate: (tag: string) => void;
};

export default function TagSelector({
  selected,
  allTags,
  onToggle,
  onCreate,
}: Props) {
  const tagCombobox = useCombobox();
  const [searchTag, setSearchTag] = useState('');

  const filteredTags = allTags.filter((t) =>
    t.label.toLowerCase().includes(searchTag.toLowerCase()),
  );

  const handleCreate = () => {
    const trimmed = searchTag.trim();
    if (!trimmed) return;
    onCreate(trimmed);
    setSearchTag('');
  };

  return (
    <Combobox store={tagCombobox} onOptionSubmit={onToggle}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => tagCombobox.openDropdown()}>
          <Pill.Group>
            {selected.map((tagLabel) => (
              <Pill
                key={tagLabel}
                onRemove={() => onToggle(tagLabel)}
                withRemoveButton>
                {tagLabel}
              </Pill>
            ))}

            <Combobox.EventsTarget>
              <PillsInput.Field
                placeholder='Skriv eller välj tagg'
                value={searchTag}
                onChange={(e) => setSearchTag(e.currentTarget.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {filteredTags.map((t) => (
            <Combobox.Option
              key={t.id}
              value={t.label}
              active={selected.includes(t.label)}>
              <Group gap='sm' align='center'>
                {selected.includes(t.label) && <CheckIcon size={12} />}
                {t.label}
              </Group>
            </Combobox.Option>
          ))}

          {searchTag &&
            !allTags.some(
              (t) => t.label.toLowerCase() === searchTag.toLowerCase(),
            ) && (
              <Combobox.Option
                value={searchTag}
                onClick={(e) => {
                  e.preventDefault();
                  handleCreate();
                }}>
                <Group
                  style={{ display: 'flex', alignItems: 'center' }}
                  gap='xs'>
                  <FaPlus />
                  Skapa "{searchTag}"
                </Group>
              </Combobox.Option>
            )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
