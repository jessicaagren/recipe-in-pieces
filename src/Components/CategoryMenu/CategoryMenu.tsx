import { Menu, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import type { Category } from '../../Data/categories';

type Props = {
  categories: Category[];
};

const getChildren = (categories: Category[], parentId: string) =>
  categories.filter((cat) => cat.parentId === parentId);

export default function CategoryMenu({ categories }: Props) {
  const rootCategories = categories.filter((cat) => !cat.parentId);

  return (
    <Group>
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
                // variant='default'
                variant='outline'
                color='white'
                // c='pink.8'
              >
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
  );
}
