import { Button } from '@mantine/core';
import type { Category } from '../../Data/categories';
import { Link, useNavigate } from 'react-router-dom';

type CategoryButtonProps = {
  path?: string;
  category: Category;
  imageIndex: number;
};

export default function CategoryButton({
  path,
  category,
  imageIndex,
}: CategoryButtonProps) {
  const navigate = useNavigate();

  const bg = `url(/src/assets/torn-paper/${imageIndex || 1}.png)`;

  return (
    <Button
      variant='transparent'
      onClick={() => {
        if (path) navigate(path);
      }}
      style={{
        backgroundImage: bg,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px 40px',
        color: 'black',
        minHeight: '60px',
      }}>
      {category.title}
    </Button>
  );
}
