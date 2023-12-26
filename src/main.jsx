import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/index.jsx'
import Destination from './pages/Destination.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />

  },
  {
    path:"/destination",
    element: <Destination />

  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
