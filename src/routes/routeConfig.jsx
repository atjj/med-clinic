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
import SignIn from '../pages/SignIn/SignIn.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';

import Profile from '../pages/Dashboard/profile/Profile.jsx';
import Records from '../pages/Dashboard/records/Records.jsx';

import AdminApplication from '../pages/AdminApplications/AdminApplications.jsx'
import AdminSpecialist from '../pages/AdminSpecialist/AdminSpecialist.jsx'
import AddAdminSpecialist from '../pages/AddAdminSpecialist/AddAdminSpecialist.jsx';
import AdminSpecialistEdit from '../pages/AdminSpecialistEdit/AdminSpecialistEdit.jsx'
import PersonalData from '../components/Dashboard/profile/PersonalData/PersonalData.jsx';
import ChangePassword from '../components/Dashboard/profile/ChangePassword/ChangePassword.jsx';
import Unauthorized from '../components/Unauthorized/Unauthorized.jsx';
import SignUpConfirm from '../pages/SignUpConfrim/SignUpConfirm.jsx';
import Results from '../pages/resultsPage/Results.jsx';
import AdminPage from '../pages/AdminPage/AdminPage.jsx';
import OnlineReg from '../pages/OnlineReg/OnlineReg.jsx';

import { roles } from '../utils/constants.js';
import AdminAnalyze from '../pages/AdminAnalyze/AdminAnalyze.jsx';
import AnalyzeTable from '../pages/AdminAnalyzeTable/AnalyzeTable.jsx';

export default new createBrowserRouter([
    {
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
          },

          {
            path: '/signup',
            element: <SignUp/>,
            errorElement: <div>404 Not Found</div>

          },

          {
            path: '/signin',
            element: <SignIn/>,
            errorElement: <div>404 Not Found</div>

          },
          {
            path: '/signupconfirm',
            element: <SignUpConfirm/>,
            errorElement: <div>404 Not Found</div>

          },

          { 
            path: '/results',
            element: <Results/>,
            errorElement: <div>404 Not Found</div>
          },

          {
            element: <Dashboard/>,
            errorElement: <div>404 Not Found</div>,
            children: [
              {
                path: '/dashboard/profile',
                element: (
                  <Unauthorized allowedRoles = {roles.PATIENT} >
                    <Profile/>,
                  </Unauthorized>
                ),
                errorElement: <div>404 Not Found</div>,
                children: [
                  {
                    path: '/dashboard/profile/personaldata',
                    element: <PersonalData/>,
                    errorElement: <div>404 Not Found</div>,

                  },
                  {
                    path: '/dashboard/profile/changePwd',
                    element: <ChangePassword/>,
                    errorElement: <div>404 Not Found</div>,
                  }
                ]
    
              },
              
              {
                path: '/dashboard/records',
                element: (
                  <Unauthorized allowedRoles={roles.PATIENT}>
                    <Records/>
                  </Unauthorized>
                ),
                errorElement: <div>404 Not Found</div>
    
              }
            ]
          }


      ]
    },

    {

      element: (
              <Unauthorized allowedRoles = {roles.ADMIN}>
                <AdminPage/>
              </Unauthorized>
               ),
      errorElement: <div>404 Not Found</div>,
      children:[
        {
          path: '/admin/online-reg',
          element: <OnlineReg/>,
          errorElement: <div>404 Not Found</div>,
        },
        {
          path: '/admin/applications',
          element: <div><AdminApplication/></div>,
          errorElement: <div>404 Not Found</div>,
        },       
        {
          path: '/admin/specialists',
          element: <div><AdminSpecialist/></div>,
          errorElement: <div>404 Not Found</div>,
        },
        {
          path: '/admin/specialists/addSpecialist',
          element: <div><AddAdminSpecialist/></div>,
          errorElement: <div>404 Not Found</div>,
        },
        {
          path: '/admin/specialists/SpecialistEdit',
          element: <div><AdminSpecialistEdit/></div>,
          errorElement: <div>404 Not Found</div>,
        },
        {
          path: '/admin/analyzes',
          element: <AdminAnalyze/>,
          errorElement: <div>404 Not Found</div>,
        },
        {
          path: '/admin/analyzes/:id',
          element: <AnalyzeTable/>,
          errorElement: <div>404 Not Found</div>,
        },
      ]

    }

  ]);


