// import React from 'react';
import styles from './DoctorProf.module.scss'
import PropTypes from 'prop-types'; // Импорт необходимого модуля
import container from '../../styles/ContainerStyles.module.scss'
const DoctorProf = ({ data }) => {
  
    return (
    <><div className={container.container}>
    <h3>{data.profName}</h3>
        <div className={styles.cards}>
            
            {data.data.map((item, index) => (
                <div  className={styles.card} key={index}>
                    <div className={styles.imageDoctor}>
                        <img width="100%" height='100%' src={item.img} alt="" />
                    </div>
                    <h4>{item.name}</h4>
                    <p className={styles.profile}>{item.prof}</p>
                    <button>Записаться на прием</button>
                </div>
            ))}
        </div>
        
        </div>
        
        </>
    );
};

// Проверка типов props
DoctorProf.propTypes = {
    data: PropTypes.shape({
        profName: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.shape({
            cardName: PropTypes.string,
            img: PropTypes.string,
            name: PropTypes.string,
            prof: PropTypes.string
        }))
    }).isRequired
};

export default DoctorProf;
