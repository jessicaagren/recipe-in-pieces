import { useLocation } from 'react-router-dom';
import { categories } from '../../Data/categories';
import { useMemo } from 'react';
import RecipeCardGrid from '../RecipeCard/RecipeCardGrid';
import { Title } from '@mantine/core';
import { client } from '../../sanityClient';
import { useEffect, useState } from 'react';

export default function CategoryPage() {
  const location = useLocation();
  const category = useMemo(
    () => categories.find((cat) => cat.path === location.pathname),
    [location.pathname],
  );

  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const query = `*[_type == "recipe"]{
    _id,
    title,
    image,
    "category": category->title,
    ingredients,
    instructions
  }`;

    client.fetch(query).then(setRecipes);
  }, []);

  // Filtrera recept som har denna kategori i sin categories-array
  const filteredRecipes = useMemo(() => {
    if (!category) return [];

    return recipes.filter(
      (recipe) =>
        recipe.category?.toLowerCase() === category.title.toLowerCase(),
    );
  }, [recipes, category]);

  return (
    <>
      <Title order={2} c='pink'>
        {category ? category.title : 'Kategori hittades inte'}
      </Title>
      <RecipeCardGrid recipes={filteredRecipes} />
    </>
  );
}
