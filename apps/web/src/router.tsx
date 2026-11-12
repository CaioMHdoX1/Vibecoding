import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link, useParams, NavLink } from 'react-router-dom'
import App from './App'
import ProductPage from './pages/ProductPage'

// Root layout that renders App and an Outlet for child routes
function RootLayout() {
  return (
    <>
      <App />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // renders App with header/footer
    children: [
      {
        index: true,
        element: <div className="p-8 text-center">Home (placeholder)</div>,
      },
      {
        path: 'product/:slug',
        element: <ProductPage />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
