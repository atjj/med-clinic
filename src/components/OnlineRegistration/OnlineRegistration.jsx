
import React, { useState } from 'react';
import styles from './OnlineRegistration.module.scss';
import remove from '../../assets/icons/close.svg';
import DropDown from '../commonComponents/DropDown/DropDown.jsx';
import doctorsImage from '../../assets/icons/doctorsImage.svg'
const OnlineRegistration = ({ onClose }) => {
    
    return (
        <>
            <div className={styles.overlay} onClick={()=>onClose()}>
                <div className={styles.drawer} onClick={(e)=>{e.stopPropagation()}}>
                    <div className={styles.headerRegistration}>
                        <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                        <p className={styles.headerTitle}>Online запись</p>
                    </div>
                    <div>
                      <DropDown/>
                    </div>
                    <div className={styles.selectDoctor}>
                        <img src={doctorsImage} alt="doctorsImage" />
                        <p className={styles.selectDoctorTitle}>Выбрать специалиста</p>
                    </div>
                    <div className={styles.selectDoctor}>
                        <img src={doctorsImage} alt="doctorsImage" />
                        <p className={styles.selectDoctorTitle}>Выбрать специалиста</p>
                    </div>
         
                </div>
            </div>
        </>
    );
};

export default OnlineRegistration;
