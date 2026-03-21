import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

type PlusButtonProps = {
  path: string;
};

export default function PlusButton({ path }: PlusButtonProps) {
  return (
    <Button
      component={Link}
      to={path}
      variant='transparent'
      style={{
        backgroundImage: "url('/src/assets/torn-paper/plus.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px 20px',
        color: 'black',
        minHeight: '60px',
        minWidth: '60px',
      }}></Button>
    // <Button
    //   component={Link}
    //   to={'/'}
    //   color='pink.0'
    //   c='pink.9'
    //   bdrs='xs'>
    //   <FaPlus />
    // </Button>
  );
}
