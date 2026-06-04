import { forwardRef, useState } from 'react';
import { Button } from '@mantine/core';
import type { Category } from '../../Data/categories';
import { useNavigate } from 'react-router-dom';

type CategoryButtonProps = {
  path?: string;
  category?: Category;
  imageIndex: number;
  title?: string;
};

// OBS: export default direkt på forwardRef-komponenten
export default forwardRef<HTMLButtonElement, CategoryButtonProps>(
  ({ path, category, imageIndex, title }, ref) => {
    const navigate = useNavigate();
    const bg = `url(/images/torn-paper/${imageIndex || 1}.png)`;

    const [clicked, setClicked] = useState(false);

    return (
      <Button
        ref={ref}
        className={`button-hover ${clicked ? '' : ''}`}
        variant='transparent'
        onClick={() => {
          if (path) navigate(path);
          setClicked(true);
          setTimeout(() => setClicked(false), 300);
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
        {title ? title : category?.title}
      </Button>
    );
  },
);
