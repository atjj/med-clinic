import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  './i18n.js';
import{ AuthProvider } from './context/AuthProvider.jsx';
import routesConfig from './routes/routeConfig'
import { RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router = {routesConfig} />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
