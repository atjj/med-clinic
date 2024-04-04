import styles from './Info.module.scss';


import clinic1 from '../../../assets/images/clinic/clinic1.jpeg';
import clinic2 from '../../../assets/images/clinic/clinic2.jpeg';
import clinic3 from '../../../assets/images/clinic/clinic3.jpeg';
import clinic4 from '../../../assets/images/clinic/clinic4.jpeg';




const Info = () => {
    return(
        <div className= {styles.info}>
                <h2>О нашей клинике <span>“MedClinic”</span></h2>
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

                        <a href='#'>Читать подробнее о клинике </a>
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
    )
}



export default Info;