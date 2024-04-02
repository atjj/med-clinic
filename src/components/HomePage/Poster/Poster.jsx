import styles from './Poster.module.scss'
import doctorImage from '../../../assets/images/doctor.jpg'
import Button from '../../../UI/Button/Button.jsx';
import Modal from '../../commonComponents/Modal/Modal.jsx'
import { useState,useRef, useEffect, forwardRef } from 'react';

const Poster = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal =() =>{
        console.log('toggleModal called');
        setIsModalOpen(!isModalOpen)
    }
    
    return(
        <>
        <div className={styles.poster}>
            <div className= {styles.title}>
                <h1>Добро пожаловать в клинику  MedCheck</h1>
                <p>Международный Медицинская клиника «MedCheck — это клиника, в которой применяются новейшие диагностические и лечебные технологии и ведут прием лучшие специалисты.</p>
                <div>
                    
                    <button className={styles.btn} onClick={toggleModal}>ОСТАВЬТЕ ЗАЯВКУ</button>
                  
                    
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

