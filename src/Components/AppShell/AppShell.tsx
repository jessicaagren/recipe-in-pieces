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
import { useHeadroom } from '@mantine/hooks';
import PlusButton from '../Buttons/PlusButton';

export default function AppShellComponent() {
  const pinned = useHeadroom({ fixedAt: 0 });

  return (
    <AppShell
      p='lg'
      header={{
        height: pinned ? 180 : 80,
      }}
      footer={{ height: 60 }}>
      <AppShell.Header
        p='inherit'
        m='0'
        bg='pink'
        bd='none'
        style={{
          transition: 'all 0.3s ease',
          overflow: 'hidden',
        }}>
        <Stack>
          <Title order={1}>
            <Anchor component={Link} to={'/'} variant='text' c='dark' size='xl'>
              {/* Recipe in Pieces */}
              <Image
                src='/src/assets/logo1.svg'
                mah={60}
                w={200}
                alt='Recipe in Pieces logo'
                pb={pinned ? 0 : 'lg'}
                style={{
                  objectFit: 'contain',
                  transition: 'all 0.3s ease',
                }}
              />
            </Anchor>
          </Title>
          <Group
            visibleFrom='sm'
            mt='xs'
            justify='space-between'
            style={{
              opacity: pinned ? 1 : 0,
              transform: pinned ? 'translateY(0)' : 'translateY(-100px)',
              transition: 'all 0.3s ease',
              pointerEvents: pinned ? 'auto' : 'none',
            }}>
            <CategoryMenu categories={categories} />
            <PlusButton />
          </Group>
        </Stack>
      </AppShell.Header>

      {/* <AppShell.Navbar>Navbar</AppShell.Navbar> */}

      <AppShell.Main pt='var(--app-shell-header-height)'>
        <div style={{ paddingBottom: 80, paddingTop: 20 }}>
          <Outlet />
        </div>
      </AppShell.Main>
      <AppShell.Footer p='md' bg='pink' bd='none'>
        <Text c='white' ta='center' size='sm'>
          Recepten och bilder är inlagda av ~moi~.
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
