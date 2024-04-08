import React from 'react';
import remove from '../../assets/icons/close.svg';
import styles from './OnlineRegistration.module.scss';
import ServiceDb from './ServiceDb.json';
import { useState } from 'react';
import DoctorsDrawer from './DoctorsDrawer/DoctorsDrawer';
const OnlineRegistration = ({ onClose }) => {
    const [isDoctorsDrawerOpen, setIsDoctorsDrawerOpen] = useState(false); 

    const openDoctorsDrawer = () => {
        setIsDoctorsDrawerOpen(true); 
    };
    return (
        <>
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.drawer} onClick={(e) => { e.stopPropagation() }}>
                    <div className={styles.headerRegistration}>
                        <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                        <p className={styles.headerTitle}>Online запись</p>
                    </div>
                    
                    <div className={styles.items}>
                    {ServiceDb.map((item, index) => (
                            <div className={styles.listServices} key={index} onClick={openDoctorsDrawer}>
                               
                                <ul>
                                    <li className={styles.services}>{item.service}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {isDoctorsDrawerOpen && <DoctorsDrawer onClose={() => setIsDoctorsDrawerOpen(false)} />}
        </>
    );
};

export default OnlineRegistration;
