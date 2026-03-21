import './App.scss';
import AppShellComponent from './Components/AppShell/AppShell';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/Routes/HomePage';
import RecipePage from './Components/Routes/RecipePage';
import { categories } from './Data/categories';
import { recipes } from './Data/recipes';
import CategoryPage from './Components/Routes/CategoryPage';
import FormPage from './Components/Routes/FormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShellComponent />,
    children: [
      { index: true, element: <HomePage /> },

      ...recipes.map(({ path, id }) => ({
        path,
        element: <RecipePage recipeId={id} />,
      })),

      ...categories.map(({ path }) => ({
        path,
        element: <CategoryPage />,
      })),

      { path: '/nytt-recept', element: <FormPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
