// import React from 'react';
import styles from './DoctorProf.module.scss'
import container from '../../../styles/ContainerStyles.module.scss'

import Button from '../../../UI/Button/Button.jsx';
import { Link } from 'react-router-dom';

const DoctorProf = ({ data }) => {
  
    return (
    <>
            <div className={container.container}>
                <h3>{data.profName}</h3>
                <div className={styles.cards}>
        
                    {data.data.map((item, index) => (
                        <Link to={`/doctors/${item.name}`} key={index}>
                        <div className={styles.card} >
                            <div className={styles.imageDoctor}>
                                <img width="100%" height='100%' src={item.img} alt="" />
                            </div>
                            <h4>{item.name}</h4>
                            <p className={styles.profile}>{item.prof}</p>
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
