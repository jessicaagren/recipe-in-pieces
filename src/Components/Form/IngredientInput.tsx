import { TextInput } from '@mantine/core';
import { useState } from 'react';

export default function IngredientInput() {
  const [inputValue, setInputValue] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setInputValue(value);

    const items = value
      .split(',')
      .map((i) => i.trim())
      .filter((i) => i.length > 0);

    setIngredients(items);
  };

  return (
    <>
      <TextInput
        label='Ingredienser'
        placeholder='Skriv ingredienser separerade med kommatecken'
        value={inputValue}
        onChange={(e) => handleChange(e.currentTarget.value)}
      />

      {/* Preview */}
      {/* {ingredients.length > 0 && (
        <ul>
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      )} */}
    </>
  );
}
