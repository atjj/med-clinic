import styles from './Registration.module.scss'
import remove from '../../../assets/icons/next.svg'
import calendar from '../../../assets/icons/calendar.svg'
const Registration = ({onClose,doctor,selectedDate,selectedTime}) =>{
    return(
     
        <div className={styles.overlay} onClick={() => onClose()}>
            <div className={styles.drawer} onClick={(e) => { e.stopPropagation()}}>
                <div className={styles.headerRegistration}>
                    <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                    <p className={styles.headerTitle}>Заполните данные</p>
                </div>

                <div className={styles.Registration}>
                    <div className={styles.registrationDetails}>
                        <div className={styles.selectDoctor}>
                         <img className={styles.doctorImage} style={{width:'70px',height:'70px'}} src={doctor.image} alt="" />
                         <div>
                            <p className={styles.doctorName}>{doctor.doctorName}</p>
                            <p className={styles.doctorProf}>{doctor.doctorProf}</p>
                         </div>
                          
                        </div>
                   <div className={styles.calendar}> 
                      <img src={calendar} alt="calendar" />
                      <div>
                        <p>{selectedDate.format('DD/MM/YYYY')}</p>
                        <p>{selectedTime}</p>
                        </div>
                   </div>
                    
                </div>

                <form>
                    <div className={styles.fullForm}>
                        <p className={styles.info}>Ваше имя и фамилия</p>
                        <input className={styles.input} type="text" placeholder='Ваше имя и фамилия' />
                    </div>
                    <div className={styles.fullForm}>
                        <p className={styles.info}>Номер телефона</p>
                        <input className={styles.input} type="text" placeholder='Номер телефона'/>
                    </div>
                    <div className={styles.fullForm}>
                        <p className={styles.info}>Ваш e-mail</p>
                        <input className={styles.input} type="text" placeholder='Ваш e-mail' />
                    </div>
                    <div className={styles.fullForm}>
                        <p className={styles.info}>Введите код из СМС</p>
                        <input  className={styles.input} type="text" placeholder='Введите код из СМС' />
                    </div>
                </form>
                
                

                </div>

            </div>
        </div>       
    )
}
export default Registration