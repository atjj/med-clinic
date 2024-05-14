import { useEffect, useState } from 'react';
import styles from './DoctorsDrawer.module.scss';
import remove from '../../../assets/icons/next.svg';
import ChooseDateDrawer from '../ChooseDateDrawer/ChooseDateDrawer'; 
import rewies from '../../../assets/icons/rewies.svg';
import Loading from '../../Loading/Loading';

import unknownImage from '../../../assets/images/Unknown.jpg';

const DoctorsDrawer = ({id, onClose }) => {

    const [doctorsList,setDoctorsList] = useState([]);
    const [doctor, setDoctor] = useState(null);
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {

        (async () => {
            const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/doctor/get-doctors-by-service/${id}`);
            const data = await res.json();
            console.log(data);
            setDoctorsList(data);
            setLoading(false);
        })();
    },[])



    const handleDoctorClick = (doctor) => {
        setDoctor(doctor);
    };
    console.log(doctorsList)
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.drawer} onClick={(e) => { e.stopPropagation()}}>
                <div className={styles.headerRegistration}>
                    <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                    <p className={styles.headerTitle}>Выберите нужного врача</p>
                </div>

                {isLoading ? <Loading/> : (
                                    <div className={styles.doctorsList}>
                                    {doctorsList.map((item, index) => (
                                        <div key = {index} className = {styles.doctor} onClick = {() => handleDoctorClick(item)}>
                                            <div>
                                                <img className={styles.doctorImage} style={{width: "36px", height: "36px"}} src={item.image ? item.image : unknownImage} alt="doctor" />
                                            </div>
                                            <div className={styles.doctorInfo}>
                
                                                <p className={styles.doctorName}>{`${item.name} ${item.surname}`}</p>
                                                <p className={styles.doctorProf}>{item.positions}</p>
                                                <div className={styles.rewieList}><img src={rewies} alt="review" /><p className={styles.rewies}>{item.review}</p></div>
                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                )}
            </div>
            {doctor &&  <ChooseDateDrawer onClose = {onClose} doctor = {doctor} serviceId = {id} />} 
        </div>
    );
};

export default DoctorsDrawer;
