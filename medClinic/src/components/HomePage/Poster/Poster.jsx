import styles from './Poster.module.scss'
import doctorImage from '../../../assets/images/doctor.jpg'
import Button from '../../../UI/Button/Button.jsx';
import Modal from '../../commonComponents/Modal/Modal.jsx'
import { useState,useRef, useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

const Poster = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal =() =>{
        console.log('toggleModal called');
        setIsModalOpen(!isModalOpen)
    }
    

    const {t} = useTranslation();

    return(
        <>
        <div className={styles.poster}>
            <div className= {styles.title}>
                <h1>{t('home.poster.title')}</h1>
                <p>{t('home.poster.subtitle')}</p>
                <div>
                    
                    <button className={styles.btn} onClick={toggleModal}>ОСТАВЬТЕ ЗАЯВКУ</button>
                  
                    
                    {/* <Button text = {t('home.poster.request')} radius= "medium"/> */}
                </div>
                
            </div>

            <div className= {styles.picture}>
              <img src = {doctorImage} alt= 'doctor'/>
           </div>
        </div>
        {isModalOpen && (
          <Modal toggleModal={toggleModal}/>  
        )}
        </>
    )
}



export default Poster;

