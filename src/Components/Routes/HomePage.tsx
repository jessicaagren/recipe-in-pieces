import { recipes } from '../../Data/recipes';
import RecipeCardGrid from '../RecipeCard/RecipeGardGrid';

export default function HomePage(): React.ReactNode {
  return (
    <>
      <RecipeCardGrid recipes={recipes} />
    </>
  );
}
