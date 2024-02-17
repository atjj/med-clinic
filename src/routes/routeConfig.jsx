import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/Homepage.jsx'
import App from '../App/App.jsx'

export default new createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <div>404 Not Found</div>,
      children:[
          { 
            path: '/',
            element: <Home/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/about',
            element: <div>about</div>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/services',
            element: <div>services</div>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/doctors',
            element: <div>doctors</div>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/price',
            element: <div>price</div>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/contacts',
            element: <div>contacts</div>,
            errorElement: <div>404 Not Found</div>
          }


      ]
    }
  ]);


