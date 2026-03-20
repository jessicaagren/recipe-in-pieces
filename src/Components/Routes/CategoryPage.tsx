import { useLocation } from 'react-router-dom';
import { categories } from '../../Data/categories';
import { useMemo } from 'react';
import { recipes } from '../../Data/recipes';
import RecipeCardGrid from '../RecipeCard/RecipeGardGrid';

export default function CategoryPage() {
  const location = useLocation();
  const category = useMemo(
    () => categories.find((cat) => cat.path === location.pathname),
    [location.pathname],
  );

  // Filtrera recept som har denna kategori i sin categories-array
  const filteredRecipes = useMemo(() => {
    if (!category) return [];
    // Matcha på både huvud- och underkategori
    return recipes.filter((recipe) =>
      recipe.categories.some(
        (cat) => cat.toLowerCase() === category.title.toLowerCase(),
      ),
    );
  }, [category]);

  return (
    <>
      <h1>{category ? category.title : 'Kategori hittades inte'}</h1>
      <RecipeCardGrid recipes={filteredRecipes} />
    </>
  );
}
