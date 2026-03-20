import {
  Card,
  Image,
  Group,
  Text,
  Badge,
  AspectRatio,
  Box,
} from '@mantine/core';
import type { Recipe } from '../../Data/recipes';
import { Link } from 'react-router-dom';

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  const [mainCategory, subCategory] = recipe.categories;

  return (
    <Link to={recipe.path ?? '/recipe'} style={{ textDecoration: 'none' }}>
      <Card
        className='transform-hover shadow-hover'
        p='lg'
        bdrs='md'
        withBorder
        maw={400}
        h='100%'
        style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Section>
          <AspectRatio ratio={1 / 1} p='lg'>
            {recipe.image ? (
              <Image src={recipe.image} h='auto' alt={recipe.title} />
            ) : (
              <Box
                h='100%'
                bg='linear-gradient(135deg, #FF006E 0%, #ff8cb8 100%)'
              />
            )}
          </AspectRatio>
        </Card.Section>

        <Card.Section pr='lg' pl='lg' pb='lg' pt='0' style={{ flex: 1 }}>
          <Text fw={500}>{recipe.title}</Text>

          <Group mt='xs' gap='xs'>
            {mainCategory && <Badge variant='filled'>{mainCategory}</Badge>}
            {subCategory && <Badge variant='light'>{subCategory}</Badge>}
            {recipe.tags?.map((tag) => (
              <Badge key={tag} variant='outline'>
                {tag}
              </Badge>
            ))}
          </Group>
        </Card.Section>
      </Card>
    </Link>
  );
}
