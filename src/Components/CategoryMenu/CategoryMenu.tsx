// import { Menu, Button, Group } from '@mantine/core';
import { Menu, Button, Group, Container, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import type { Category } from '../../Data/categories';

type Props = {
  categories: Category[];
};

const getChildren = (categories: Category[], parentId: string) =>
  categories.filter((cat) => cat.parentId === parentId);

export default function CategoryMenu({ categories }: Props) {
  const rootCategories = categories.filter((cat) => !cat.parentId);
  const allCategories = categories;

  return (
    <>
      {/* Desktop: show current menu */}
      <Group visibleFrom='sm'>
        {rootCategories.map((root) => {
          const children = getChildren(categories, root.id);
          return (
            <Menu
              trigger='hover'
              key={root.id}
              shadow='md'
              width={200}
              position='bottom-start'>
              <Menu.Target>
                <Button
                  component={Link}
                  to={root.path || '/'}
                  bdrs='xs'
                  variant='outline'
                  color='white'>
                  {root.title}
                </Button>
              </Menu.Target>
              {children.length > 0 && (
                <Menu.Dropdown>
                  {children.map((child) => (
                    <Menu.Item
                      key={child.id}
                      component={Link}
                      to={child.path || '/'}>
                      {child.title}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              )}
            </Menu>
          );
        })}
      </Group>

      {/* Mobile: consolidate all categories into a single menu */}
      <Flex hiddenFrom='sm'>
        <Menu withinPortal width='30%'>
          <Menu.Target>
            <Button bdrs='xs' variant='outline' color='white'>
              Kategorier
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            {rootCategories.map((root) => {
              const children = getChildren(categories, root.id);

              // 🔹 Har underkategorier → submenu
              if (children.length > 0) {
                return (
                  <Menu.Sub key={root.id}>
                    <Menu.Sub.Target>
                      <Menu.Sub.Item>{root.title}</Menu.Sub.Item>
                    </Menu.Sub.Target>

                    <Menu.Sub.Dropdown>
                      {children.map((child) => (
                        <Menu.Item
                          key={child.id}
                          component={Link}
                          to={child.path || '/'}>
                          {child.title}
                        </Menu.Item>
                      ))}
                    </Menu.Sub.Dropdown>
                  </Menu.Sub>
                );
              }

              // 🔹 Ingen underkategori → vanlig item
              return (
                <Menu.Item key={root.id} component={Link} to={root.path || '/'}>
                  {root.title}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </>
  );
}
