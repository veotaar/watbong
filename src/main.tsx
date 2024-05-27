import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.tsx';
import Beers from './routes/Beers.tsx';
import Burgers from './routes/Burgers.tsx';
import Cocktails from './routes/Cocktails.tsx';
import Categories from './routes/Categories.tsx';
import CoffeeTea from './routes/CoffeeTea.tsx';
import Desserts from './routes/Desserts.tsx';
import FreshJuice from './routes/FreshJuice.tsx';
import MacAndCheese from './routes/MacAndCheese.tsx';
import Mains from './routes/Mains.tsx';
import Sandwiches from './routes/Sandwiches.tsx';
import Shakes from './routes/Shakes.tsx';
import Snacks from './routes/Snacks.tsx';
import SoftDrinks from './routes/SoftDrinks.tsx';
import Soups from './routes/Soups.tsx';
import Spirits from './routes/Spirits.tsx';
import Wines from './routes/Wines.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'menu',
        element: <Categories />,
      },
      {
        path: 'beers',
        element: <Beers />,
      },
      {
        path: 'burgers',
        element: <Burgers />,
      },
      {
        path: 'cocktails',
        element: <Cocktails />,
      },
      {
        path: 'coffeetea',
        element: <CoffeeTea />,
      },
      {
        path: 'desserts',
        element: <Desserts />,
      },
      {
        path: 'juices',
        element: <FreshJuice />,
      },
      {
        path: 'macandcheese',
        element: <MacAndCheese />,
      },
      {
        path: 'mains',
        element: <Mains />,
      },
      {
        path: 'sandwiches',
        element: <Sandwiches />,
      },
      {
        path: 'shakes',
        element: <Shakes />,
      },
      {
        path: 'snacks',
        element: <Snacks />,
      },
      {
        path: 'softdrinks',
        element: <SoftDrinks />,
      },
      {
        path: 'soups',
        element: <Soups />,
      },
      {
        path: 'spirits',
        element: <Spirits />,
      },
      {
        path: 'wines',
        element: <Wines />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
