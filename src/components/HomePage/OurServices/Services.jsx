import styles from './Services.module.scss';


import vaccine from '../../../assets/images/medservices/anesthesiology.svg'
import derma from '../../../assets/images/medservices/dermatology.svg'
import fizio from '../../../assets/images/medservices/physiotherapy.svg'
import kardio from '../../../assets/images/medservices/cardiology.svg'
import nevro from '../../../assets/images/medservices/nevrology.svg'
import ofta from '../../../assets/images/medservices/oftalmology.svg'
import onko from '../../../assets/images/medservices/onkology.svg'
import terapy from '../../../assets/images/medservices/therapy.svg'
import uro from '../../../assets/images/medservices/urology.svg'



const Services = () =>{
    return (
        <>
            <h2>Наши <span>услуги</span></h2>

            <h3>За все время работы клиника приняла более 1 млн. пациентов.</h3>

            <div className= {styles.services}>      
                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {vaccine}/>
                        </div>
                        <div className= {styles.desc}>Вакцинация</div>
                        </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {kardio}/>
                        </div>
                        <div className= {styles.desc}>Кардиология</div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {nevro}/>
                        </div>
                        <div className= {styles.desc}>Неврология</div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {derma}/>
                        </div>
                        <div className= {styles.desc}>Дерматология</div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {ofta}/>
                        </div>
                        <div className= {styles.desc}>Офтальмология</div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {terapy}/>
                        </div>
                        <div className= {styles.desc}>Терапия</div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {fizio}/>
                        </div>
                        <div className= {styles.desc}>Физиотерапия</div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {onko}/>
                        </div>
                        <div className= {styles.desc}>Онкология</div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className= {styles.icon}>
                            <img src = {uro}/>
                        </div>
                        <div className= {styles.desc}>Урология</div>
                    </div>
            </div>


            <div className= {styles.btnPanel}>
                <button>Смотреть все</button>
            </div>
        
        </>
    )
}


export default Services;