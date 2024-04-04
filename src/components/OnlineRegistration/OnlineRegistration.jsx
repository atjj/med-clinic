
import {useState}  from 'react';
import remove from '../../assets/icons/close.svg';
import styles from './OnlineRegistration.module.scss';
import doctorsImage from '../../assets/icons/doctorsImage.svg';
import Calendar from './Calendar.jsx'
import DoctorsDrawer from './DoctorsDrawer.jsx';
const OnlineRegistration = ({ onClose }) => {
    const [isDoctorDrawerOpen, setIsDoctorDrawerOpen] = useState(false);

    const openDoctorDrawer = () => {
        setIsDoctorDrawerOpen(true);
    };

    const closeDoctorDrawer = () => {
        setIsDoctorDrawerOpen(false);
    };

    return (
        <>
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.drawer} onClick={(e) => { e.stopPropagation() }}>
                    <div className={styles.headerRegistration}>
                        <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                        <p className={styles.headerTitle}>Online запись</p>
                    </div>
                    <div>
                        <div className={styles.box}>
                            <select>
                                <option>Выбрать услуги</option>
                                <option>Кардиология</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                    </div>
                   
                    <div className={styles.selectDoctor} onClick={openDoctorDrawer}>
                        <img src={doctorsImage} alt="doctorsImage" />
                        <p className={styles.selectDoctorTitle}>Выбрать дату и время</p>
                    </div>
                    {isDoctorDrawerOpen && (
                        <Calendar onClose={closeDoctorDrawer} />
                        
                    )}
                    

                </div>
            </div>
        </>
    );
};

export default OnlineRegistration;

