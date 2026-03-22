import {
  Container,
  Stack,
  Title,
  Image,
  Badge,
  Group,
  Text,
  List,
  Divider,
  Center,
  SimpleGrid,
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import { recipes } from '../../Data/recipes';

type Props = {
  recipeId?: string;
};

export default function RecipePage({ recipeId }: Props): React.ReactNode {
  const params = useParams();
  const id = recipeId || params.recipeId;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <div>Receptet hittades inte.</div>;

  return (
    <Container size='lg'>
      <Stack>
        <Title order={2} c='pink'>
          {recipe.title}
        </Title>
        <SimpleGrid>
          {recipe.image ? (
            <Image h='auto' mah='400' alt={recipe.title} src={recipe.image} />
          ) : (
            <Center
              h='auto'
              mah='400'
              mih={400}
              bg='linear-gradient(135deg, #FF006E 0%, #ff8cb8 100%)'>
              <Text c='white' ta='center' fz='xl' fw={600}>
                Ingen bild
              </Text>
            </Center>
          )}
        </SimpleGrid>
        <Group>
          {recipe.categories.map((cat) => (
            <Badge key={cat}>{cat}</Badge>
          ))}
        </Group>
        {recipe.description && <Text fw={600}>{recipe.description}</Text>}
        <Divider />
        {recipe.portions && <Text>Portioner: {recipe.portions}</Text>}
        {recipe.ingredients && (
          <List>
            {recipe.ingredients.map((ing) => (
              <List.Item key={ing}>{ing}</List.Item>
            ))}
          </List>
        )}
        {recipe.instructions && (
          <>
            <Text mt='md' fw={600}>
              Instruktioner:
            </Text>
            <List type='ordered'>
              {recipe.instructions.map((step) => (
                <List.Item key={step}>{step}</List.Item>
              ))}
            </List>
          </>
        )}
      </Stack>
    </Container>
  );
}
