import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Homepage.jsx'
import ServicesPage from '../pages/ServicesPage/ServicesPage.jsx';
import PricePage from '../pages/PricePage/PricePage.jsx';
import Service from '../pages/ServicePage/ServicePage.jsx';
import About from '../pages/About/Aboutpage.jsx'
import Doctors from '../pages/Doctors/Doctors.jsx'
import Contacts from '../pages/Contacts/Contacts.jsx'
import App from '../App/App.jsx'
import Doctorsinfo from '../components/DoctorsPage/DocotorsInfo/Doctorsinfo.jsx';
import Analize from '../pages/Analize/Analize.jsx';
import AnalizeInfo from '../components/Analizepage/AnalizeInfo/AnalizeInfo.jsx';
import Cart from '../pages/Cart/Cart.jsx';

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
            element: <ServicesPage/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/doctors',
            element: <Doctors/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/price',
            element: <PricePage/>,
            errorElement: <div>404 Not Found</div>
          },
          
          {
            path: '/analize',
            element: <Analize/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/cart',
            element: <Cart/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/analize/:id',
            element: <AnalizeInfo/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/contacts',
            element: <Contacts/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/services/:id',
            element: <Service/>,
            errorElement: <div>404 Not Found</div>
          },
          {
            path: '/doctors/:id',
            element: <Doctorsinfo/>,
            errorElement: <div>404 Not Found</div>
          }


      ]
    }
  ]);


