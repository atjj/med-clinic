import styles from './Homepage.module.scss'




import BestDoctors from '../../components/HomePage/BestDoctors/BestDoctors.jsx'
import Poster from '../../components/HomePage/Poster/Poster.jsx';
import Services from '../../components/HomePage/OurServices/Services.jsx';
import Info from '../../components/HomePage/Info/Info.jsx';
import Form from '../../components/HomePage/Form/Form.jsx';
import Cards from '../../components/HomePage/Cards/Cards.jsx';


const Homepage = () => {
    return(
        
        <div className= {styles.home}>


            <Poster/>
            <Cards/>

            <div className= {styles.serviceSection}>
                <Services/>
            </div>


            <div className= {styles.infoSection}>
                <Info/>
            </div>


            <div className={styles.bestDoctorsSection}>
                <BestDoctors/>     
            </div>


            <div className={styles.formSection}>
                <Form/>
            </div>

        </div>
    )
}




export default Homepage; 

