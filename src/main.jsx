import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import AuthPovider from './provider/AuthPovider'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPovider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthPovider>
  </React.StrictMode>,
)
