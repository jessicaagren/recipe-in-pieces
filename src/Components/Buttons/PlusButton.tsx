import { Button } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlusButton() {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(true);
  //   navigate('/nytt-recept');
  //   setTimeout(() => setClicked(false), 300);
  // };

  return (
    <Button
      onClick={() => {
        navigate('/nytt-recept');
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
      }}
      className={`button-hover ${clicked ? '' : ''}`}
      variant='transparent'
      style={{
        backgroundImage: "url('/images/torn-paper/plus.png')",
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
