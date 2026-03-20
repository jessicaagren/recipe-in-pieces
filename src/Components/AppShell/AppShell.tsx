import {
  AppShell,
  Group,
  Stack,
  Title,
  Text,
  Anchor,
  Image,
  Button,
} from '@mantine/core';
import { categories } from '../../Data/categories';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import { Link, Outlet } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useHeadroom } from '@mantine/hooks';

export default function AppShellComponent() {
  const pinned = useHeadroom({ fixedAt: 0 });

  return (
    <AppShell
      p='lg'
      header={{ height: 150, collapsed: !pinned, offset: false }}
      footer={{ height: 60 }}>
      <AppShell.Header
        p='inherit'
        bg='pink'
        style={{
          transition: 'transform 0.3s',
          transform: pinned ? 'translateY(0)' : 'translateY(-100%)',
        }}>
        <Stack>
          <Title order={1}>
            <Anchor component={Link} to={'/'} variant='text' c='dark' size='xl'>
              {/* Recipe in Pieces */}
              <Image
                src='/src/assets/logo1.svg'
                mah={60}
                w={200}
                style={{ objectFit: 'contain' }}
                alt='Recipe in Pieces logo'
              />
            </Anchor>
          </Title>
          <Group mt='xs'>
            <CategoryMenu categories={categories} />
            <Button
              component={Link}
              to={'/'}
              color='pink.0'
              c='pink.9'
              bdrs='xs'>
              <FaPlus />
            </Button>
          </Group>
        </Stack>
      </AppShell.Header>

      {/* <AppShell.Navbar>Navbar</AppShell.Navbar> */}

      <AppShell.Main pt='var(--app-shell-header-height)'>
        {/* <div style={{ paddingBottom: 80, paddingTop: 20 }}> */}
        <Outlet />
        {/* </div> */}
      </AppShell.Main>
      <AppShell.Footer p='md'>
        <Text c='dimmed' ta='center' size='sm'>
          Recepten och bilder är inlagda av ~moi~.
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
