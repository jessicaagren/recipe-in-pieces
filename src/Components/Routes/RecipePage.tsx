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
  Button,
  ActionIcon,
  TextInput,
  Textarea,
  NumberInput,
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import { FiEdit3 } from 'react-icons/fi';
import { client } from '../../sanityClient';
import { useEffect, useState } from 'react';

type Props = {
  recipeId?: string;
};

export default function RecipePage({ recipeId }: Props): React.ReactNode {
  const params = useParams();
  const id = recipeId || params.recipeId;
  // const recipe = recipes.find((r) => r.id === id);

  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    const query = `*[_type == "recipe" && _id == $id][0]{
    _id,
    title,
    description,
    image,
    ingredients,
    instructions,
    "category": category->title
  }`;

    client.fetch(query, { id }).then(setRecipe);
  }, [id]);

  if (!recipe) return <div>Receptet hittades inte.</div>;

  // ✅ Default values så vi slipper undefined-problem
  const [editedRecipe, setEditedRecipe] = useState({
    ...recipe,
    ingredients: recipe.ingredients || [],
    instructions: recipe.instructions || [],
    categories: recipe.category || [],
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container size='lg'>
      <Stack>
        {/* TITLE */}
        {isEditing ? (
          <TextInput
            value={editedRecipe.title}
            onChange={(e) =>
              setEditedRecipe({ ...editedRecipe, title: e.target.value })
            }
          />
        ) : (
          <Title order={2} c='pink'>
            {recipe.title}
          </Title>
        )}

        {/* IMAGE */}
        <SimpleGrid>
          {isEditing ? (
            <TextInput
              placeholder='Bild-URL'
              value={editedRecipe.image || ''}
              onChange={(e) =>
                setEditedRecipe({ ...editedRecipe, image: e.target.value })
              }
            />
          ) : recipe.image ? (
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

        {/* TAGS + EDIT */}
        <Group align='center'>
          {isEditing ? (
            <TextInput
              value={editedRecipe.category.join(', ')}
              onChange={(e) =>
                setEditedRecipe({
                  ...editedRecipe,
                  categories: e.target.value.split(',').map((c) => c.trim()),
                })
              }
            />
          ) : (
            recipe.category.map((cat) => <Badge key={cat}>{cat}</Badge>)
          )}

          <ActionIcon
            variant='subtle'
            c='gray'
            onClick={() => setIsEditing((prev) => !prev)}>
            <FiEdit3 />
          </ActionIcon>
        </Group>

        {/* DESCRIPTION */}
        {isEditing ? (
          <Textarea
            value={editedRecipe.description || ''}
            onChange={(e) =>
              setEditedRecipe({
                ...editedRecipe,
                description: e.target.value,
              })
            }
          />
        ) : (
          recipe.description && <Text fw={600}>{recipe.description}</Text>
        )}

        <Divider />

        {/* PORTIONS ✅ fixad med NumberInput */}
        {isEditing ? (
          <NumberInput
            value={editedRecipe.portions}
            onChange={(value) =>
              setEditedRecipe({
                ...editedRecipe,
                portions: typeof value === 'number' ? value : undefined,
              })
            }
          />
        ) : (
          recipe.portions && <Text>Portioner: {recipe.portions}</Text>
        )}

        {/* INGREDIENTS ✅ alltid array */}
        {isEditing ? (
          editedRecipe.ingredients.map((ing, index) => (
            <TextInput
              key={index}
              value={ing}
              onChange={(e) => {
                const updated = [...editedRecipe.ingredients];
                updated[index] = e.target.value;
                setEditedRecipe({ ...editedRecipe, ingredients: updated });
              }}
            />
          ))
        ) : (
          <List>
            {recipe.ingredients?.map((ing) => (
              <List.Item key={ing}>{ing}</List.Item>
            ))}
          </List>
        )}

        {/* INSTRUCTIONS */}
        {isEditing ? (
          editedRecipe.instructions.map((step, index) => (
            <Textarea
              key={index}
              value={step}
              onChange={(e) => {
                const updated = [...editedRecipe.instructions];
                updated[index] = e.target.value;
                setEditedRecipe({ ...editedRecipe, instructions: updated });
              }}
            />
          ))
        ) : (
          <>
            <Text mt='md' fw={600}>
              Instruktioner:
            </Text>
            <List type='ordered'>
              {recipe.instructions?.map((step) => (
                <List.Item key={step}>{step}</List.Item>
              ))}
            </List>
          </>
        )}

        {/* SAVE / CANCEL */}
        {isEditing && (
          <Group>
            <Button
              onClick={() => {
                console.log('Sparat:', editedRecipe);
                setIsEditing(false);
              }}>
              Spara
            </Button>

            <Button
              variant='outline'
              onClick={() => {
                setEditedRecipe({
                  ...recipe,
                  ingredients: recipe.ingredients || [],
                  instructions: recipe.instructions || [],
                  categories: recipe.category || [],
                });
                setIsEditing(false);
              }}>
              Avbryt
            </Button>
          </Group>
        )}
      </Stack>
    </Container>
  );
}
