import styles from './About.module.scss';
import signature from '../../assets/images/signature.png';
import health from '../../assets/images/health.png';
import clinic1 from '../../assets/images/clinic/clinic1.jpeg';
import clinic2 from '../../assets/images/clinic/clinic2.jpeg';
import clinic3 from '../../assets/images/clinic/clinic3.jpeg';
import clinic4 from '../../assets/images/clinic/clinic4.jpeg';
import container from '../../styles/ContainerStyles.module.scss'

const About =()=>{
    return(
        <div className={styles.about}>
            <div className={container.container}>
            <h2>Здоровье — самое <span>ценное в жизни </span> </h2>
            <div className={styles.health}>
                <div className={styles.leftHealth} >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <div className={styles.signature}><img src={signature} alt="" /></div>
                </div>
                <div className={styles.rightHealth} >
                    <div className={styles.rightHealth__img}><img width="100%" src={health} alt="" /></div>
                    <span className={styles.rightHealth__frame}></span>
                    <div className={styles.rightHealth__name}>
                        <p className={styles.name__prof}>Руководитель клиники Medical Clinic</p>
                        <p className={styles.name__person}>Аниса Михаилова</p>
                    </div>
                </div>
            </div>

            <div className={styles.aboutUs}>
                <h2>О нашей клинике <span>“MedCheck”</span></h2>
                <div className= {styles.wrapper}>
                    <div className={styles.info}>
                        <p>
                            Вся наша команда готова обеспечить вам медицинский уход и заботу на самом высоком уровне. Наша главная задача — оказать Вам теплый прием и обеспечить самый лучший медицинский уход. У нас Вы в хороших руках! В нашей клинике используются только качественные материалы и проверенные технологии. Для каждого клиента специалисты нашей клиники разработают индивидуальный план лечения, подробно рассказывая о каждом этапе.
                        </p>

                        <p>
                            Доброжелательность и уважительное отношение к пациентам, не только материальная, но и моральная ответственность за результаты лечения — все это взято за основу политики Medical Clinic. Профессионализм и высокое качество оказываемых услуг помогают нам привлечь пациентов которые рекомендуют нас своим родным и близким.
                        </p>

                        <p>
                            Уже 20 лет мы работаем на уровне лучших мировых стандартов, внедряя и развивая передовые методы лечения для сохранения здоровья наших пациентов.
                        </p>

                        <button>Записаться на консультацию</button>
                    </div>

                    <div className= {styles.clinicImages}>
                        <div className= {styles.mainImage}>
                            <img src = {clinic1}/>
                        </div>

                        <div className={styles.subImages}>
                            <img src = {clinic2}/>
                            <img src = {clinic3}/>
                            <img src = {clinic4}/>
                        </div>

                    </div>
                </div>

        
        </div>
        </div>
        </div>
    )
}
export default About;