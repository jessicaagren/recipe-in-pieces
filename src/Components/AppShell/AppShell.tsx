import {
  AppShell,
  Group,
  Stack,
  Title,
  Text,
  Anchor,
  Image,
} from '@mantine/core';
import { categories } from '../../Data/categories';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import { Link, Outlet } from 'react-router-dom';
import PlusButton from '../Buttons/PlusButton';
import { useWindowScroll } from '@mantine/hooks';

export default function AppShellComponent() {
  const [scroll] = useWindowScroll();

  const isSmall = scroll.y > 120;

  return (
    <AppShell p='lg' footer={{ height: 60 }}>
      <AppShell.Header
        style={{
          height: isSmall ? 80 : 180,
          transition: 'height 0.3s ease',
          overflow: 'hidden',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          border: 'none',
        }}
        p='lg'
        bg='pink'>
        <Stack>
          <Group>
            <Title order={1}>
              <Anchor
                component={Link}
                to={'/'}
                variant='text'
                c='dark'
                size='xl'>
                {/* Recipe in Pieces */}
                <Image
                  src='/src/assets/logo1.svg'
                  alt='Recipe in Pieces logo'
                  style={{
                    height: isSmall ? 40 : 60,
                    transition: 'all 0.3s ease',
                    objectFit: 'contain',
                  }}
                />
              </Anchor>
            </Title>
          </Group>
          <Group
            mt='xs'
            justify='space-between'
            style={{
              opacity: isSmall ? 0 : 1,
              transform: isSmall ? 'translateY(-20px)' : 'translateY(0)',
              transition: 'all 0.2s ease',
              pointerEvents: isSmall ? 'none' : 'auto',
            }}>
            <CategoryMenu categories={categories} />
            <PlusButton />
          </Group>
        </Stack>
      </AppShell.Header>

      {/* <AppShell.Navbar>Navbar</AppShell.Navbar> */}

      <AppShell.Main pt={isSmall ? 80 : 180}>
        <div style={{ paddingBottom: 80, paddingTop: 20 }}>
          <Outlet />
        </div>
      </AppShell.Main>
      <AppShell.Footer p='md' bg='pink' bd='none' mb='-1px'>
        <Text c='white' ta='center' size='sm'>
          Recepten och bilder är inlagda av ~moi~.
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
