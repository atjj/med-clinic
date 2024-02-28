import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Homepage.jsx'
import About from '../pages/About/Aboutpage.jsx'
import Doctors from '../pages/Doctors/Doctors.jsx'
import Contacts from '../pages/Contacts/Contacts.jsx'
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
            element: <About/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/services',
            element: <div>Price</div> ,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/doctors',
            element: <Doctors/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/price',
            element: <div>price</div>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/contacts',
            element: <Contacts/>,
            errorElement: <div>404 Not Found</div>
          }


      ]
    }
  ]);


