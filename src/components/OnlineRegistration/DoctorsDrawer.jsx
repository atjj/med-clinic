import styles from './OnlineRegistration.module.scss';
import remove from '../../assets/icons/next.svg'
import doctorsImage from '../../assets/icons/doctorsImage.svg'
const DoctorsDrawer = ({onClose}) => {

    
    return (
        <>
            <div className={styles.overlay} onClick={()=>onClose()}>
                <div className={styles.drawer} onClick={(e)=>{e.stopPropagation()}}>
                    <div className={styles.headerRegistration}>
                        <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                        <p className={styles.headerTitle}>Выбрать специалиста</p>
                    </div>
                    <div className={styles.selectDoctor}  >
                        <img src={doctorsImage} alt="doctorsImage" />
                        <p className={styles.selectDoctorTitle}>Любой свободный специалист</p>
                    </div>
                      
                    
                    
              
                </div>
            </div>
        </>
    );
};

export default DoctorsDrawer;

