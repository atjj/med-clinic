// import React from 'react';
import styles from './DoctorProf.module.scss'
import container from '../../../styles/ContainerStyles.module.scss'

import Button from '../../../UI/Button/Button.jsx';
import { Link } from 'react-router-dom';
import unknownImage from '../../../assets/images/Unknown.jpg';

const DoctorProf = ({ data }) => {
  
    return (
    <>
            <div className={container.container}>
                <h3 className= {styles.header}>{data?.profName}</h3>
                <div className={styles.cards}>
        
                    {data?.data.map((item, index) => (
                        <Link to={`/doctors/${item?.doctor_id}`} key={index}>
                        <div className={styles.card} >
                            <div className={styles.imageDoctor}>
                                <img width="100%" height='100%' src={item?.img ? item.img : unknownImage} alt="" />
                            </div>
                            <p className= {styles.docName}>{item?.name}</p>
                            <p className={styles.profile}>{item?.prof}</p>
                            <div className= {styles.btn}>
                                <Button text = "Записаться на прием" radius = 'small'/>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
                
            </div> 
        </>
    );
};


export default DoctorProf;
