import { Menu, Group, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import type { Category } from '../../Data/categories';
import CategoryButton from '../Buttons/CategoryButton';

type Props = {
  categories: Category[];
};

const getChildren = (categories: Category[], parentId: string) =>
  categories.filter((cat) => cat.parentId === parentId);

export default function CategoryMenu({ categories }: Props) {
  const rootCategories = categories.filter((cat) => !cat.parentId);

  return (
    <>
      {/* Desktop: show current menu */}
      <Group visibleFrom='sm'>
        {rootCategories.map((root, index) => {
          const children = getChildren(categories, root.id);

          return (
            <Menu
              trigger='hover'
              key={root.id}
              shadow='md'
              width={200}
              position='bottom-start'
              withinPortal>
              <Menu.Target>
                <div style={{ display: 'inline-block' }}>
                  <CategoryButton
                    path={root.path || '/'}
                    category={root}
                    imageIndex={index + 1}
                  />
                </div>
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
            <div style={{ display: 'inline-block' }}>
              <CategoryButton title={'Kategorier'} imageIndex={1} />
            </div>
            {/* <Button
              variant='transparent'
              style={{
                backgroundImage: 'url(/src/assets/torn-paper/1.png',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '20px 40px',
                color: 'black',
                minHeight: '60px',
              }}>
              Kategorier
            </Button> */}
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
