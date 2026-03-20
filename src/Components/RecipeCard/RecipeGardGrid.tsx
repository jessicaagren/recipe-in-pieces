import { SimpleGrid } from '@mantine/core';
import type { Recipe } from '../../Data/recipes';
import RecipeCard from './RecipeCard';

type Props = {
  recipes: Recipe[];
};

export default function RecipeGardGrid({ recipes }: Props) {
  if (recipes.length === 0) {
    return <p>Inga recept att visa.</p>;
  }
  return (
    <SimpleGrid cols={{ base: 1, sm: 1, md: 3, lg: 4 }} spacing='lg'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </SimpleGrid>
  );
}
