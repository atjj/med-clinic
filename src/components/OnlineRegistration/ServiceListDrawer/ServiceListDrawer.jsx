import remove from '../../../assets/icons/close.svg';
import styles from './ServiceListDrawer.module.scss';
import {useEffect, useState } from 'react';
import DoctorsDrawer from '../DoctorsDrawer/DoctorsDrawer';

import Loading from '../../../components/Loading/Loading.jsx';
const ServiceListDrawer = ({ onClose }) => {

    const [services,setServices] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [id,setId] = useState(0);

    
    useEffect(() => {

        (async () => {

            const res = await fetch('https://medclinic-422605.uc.r.appspot.com/api/v1/schedule/services');

            const data = await res.json();
            setLoading(false);
            setServices(data);
        })();

    },[]);

    const [isDoctorsDrawerOpen, setIsDoctorsDrawerOpen] = useState(false); 

    const openDoctorsDrawer = (id) => {
        setIsDoctorsDrawerOpen(true); 
        setId(id);
    };

    console.log(services)
    return (
        <>
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.drawer} onClick = {(e) => { e.stopPropagation() }}>
                    <div className={styles.headerRegistration}>
                        <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                        <p className={styles.headerTitle}>Online запись</p>
                    </div>
                    

                    {isLoading ? <Loading/>: (
                        <div className={styles.items}>
                        {services && services.map(({service_id,name}) => (
                            <ul className={styles.listServices} key={service_id}>
                                <li 
                                    className = {styles.services}
                                    onClick = {() => {openDoctorsDrawer(service_id)}}
                                >
                                    {name}
                                </li>                        
                            </ul>
                            ))}
                    </div>
                    )}
                </div>
            </div>
            
            {isDoctorsDrawerOpen && <DoctorsDrawer id = {id} onClose={() => setIsDoctorsDrawerOpen(false)} />}
        </>
    );
};




export default ServiceListDrawer;




/*

                            <div className={styles.listServices} key={service_id} onClick={openDoctorsDrawer}>
                                    <ul>
                                         <li className={styles.services}>{name}</li>
                                    </ul>
                                
                            </div>
*/