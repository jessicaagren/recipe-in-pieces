import { Textarea } from '@mantine/core';
import { useState } from 'react';

export default function InstructionsInput() {
  const [inputValue, setInputValue] = useState('');
  const [instructions, setInstructions] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setInputValue(value);

    const steps = value
      .split('\n')
      .map((step) => step.trim())
      .filter((step) => step.length > 0);

    setInstructions(steps);
  };

  return (
    <>
      <Textarea
        label='Instruktioner'
        placeholder={`Skriv ett steg per rad
Ex:
Hacka lök
Stek i smör
Tillsätt tomater`}
        value={inputValue}
        onChange={(e) => handleChange(e.currentTarget.value)}
        autosize
        minRows={4}
      />

      {/* Preview */}
      {/* {instructions.length > 0 && (
        <ol style={{ marginTop: '10px' }}>
          {instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      )} */}
    </>
  );
}
