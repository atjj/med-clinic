import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import './App.css'
import {Outlet} from 'react-router-dom';
import {  useState} from 'react';
function App() {
  const [cartOpened,setCartOpened]=useState(false);
  return (
    <>
      
        <Header />
          <Outlet/>
        <Footer/>
      

    </>
  )
}

export default App
