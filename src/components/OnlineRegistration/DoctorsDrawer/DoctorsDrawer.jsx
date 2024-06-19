import React, { useState } from 'react';
import styles from './DoctorsDrawer.module.scss';
import remove from '../../../assets/icons/next.svg';
import DoctorsDrawerDB from './DoctorsDrawer.json';
import ChooseDate from '../ChooseDate/ChooseDate'; 
import rewies from '../../../assets/icons/rewies.svg'
const DoctorsDrawer = ({ onClose }) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null); 

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    return (
        <div className={styles.overlay} onClick={() => onClose()}>
            <div className={styles.drawer} onClick={(e) => { e.stopPropagation()}}>
                <div className={styles.headerRegistration}>
                    <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                    <p className={styles.headerTitle}>Выберите нужного врача</p>
                </div>

                <div className={styles.doctorsList}>
                    {DoctorsDrawerDB.map((item, index) => (
                        <div key={index} className={styles.doctor} onClick={() => handleDoctorClick(item)}>
                            <div>
                                <img className={styles.doctorImage} style={{width: "40px", height: "40px"}} src={item.image} alt="doctor" />
                            </div>
                            <div className={styles.doctorInfo}>
                                <p className={styles.doctorName}>{item.doctorName}</p>
                                <p className={styles.doctorProf}>{item.doctorProf}</p>
                                <div className={styles.rewieList}><img src={rewies} alt="rewie" /><p className={styles.rewies}> 166</p></div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedDoctor && <ChooseDate onClose={onClose} doctor={selectedDoctor} />} {/* Показываем компонент ChooseDate, если выбран врач */}
        </div>
    );
};

export default DoctorsDrawer;
