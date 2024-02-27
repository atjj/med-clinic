import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/Homepage.jsx'
import ServicesPage from '../pages/ServicesPage/ServicesPage.jsx';
import PricePage from '../pages/PricePage/PricePage.jsx';
import Service from '../pages/ServicePage/ServicePage.jsx';

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
            element: <ServicesPage/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/doctors',
            element: <div>doctors</div>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/price',
            element: <PricePage/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/contacts',
            element: <div>contacts</div>,
            errorElement: <div>404 Not Found</div>
          },
          
          {
            path: '/services/:id',
            element: <Service/>,
            errorElement: <div>404 Not Found</div>

          }


      ]
    }
  ]);


