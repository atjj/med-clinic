import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import './App.css'
import {Outlet} from 'react-router-dom';


function App() {




  return (
    <>
      
        <Header/>
          <Outlet/>
        <Footer/>
      
    </>
  )
}

export default App
