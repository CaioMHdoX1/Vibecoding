import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
      },
      {
        path: 'product/:slug',
        element: <ProductPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
