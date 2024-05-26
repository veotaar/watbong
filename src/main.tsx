import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.tsx';
import Categories from './routes/Categories.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'menu',
        element: <Categories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
