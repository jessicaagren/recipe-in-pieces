import { FileButton, Button, Group, Text } from '@mantine/core';
import { useRef } from 'react';

type ImageUploadProps = {
  file: File | null;
  setFile: (file: File | null) => void;
};

export default function ImageUpload({ file, setFile }: ImageUploadProps) {
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <Group mt='md'>
      <FileButton
        resetRef={resetRef}
        onChange={setFile}
        accept='image/png,image/jpeg'>
        {(props) => <Button {...props}>Upload image</Button>}
      </FileButton>

      <Button disabled={!file} color='red' onClick={clearFile}>
        Reset
      </Button>

      {file && (
        <Text size='sm' ta='center' mt='sm'>
          Picked file: {file.name}
        </Text>
      )}
    </Group>
  );
}
