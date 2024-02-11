import styles from './Homepage.module.scss'

import Card from '../../components/Card/Card.jsx'

import doctorImage from '../../assets/images/doctor.jpg'
import form from '../../assets/images/form.png'
import user from '../../assets/icons/Users.svg';
import phone2 from '../../assets/icons/phone2.svg';
import send from '../../assets/icons/send.svg';
import vaccine from '../../assets/images/vaksinasiya.png'
import derma from '../../assets/images/Dermatologiya.png'
import fizio from '../../assets/images/Fizioterapiya.png'
import kardio from '../../assets/images/Kardiologiya.png'
import nevro from '../../assets/images/Nevrologiya.png'
import ofta from '../../assets/images/Oftalmologiya.png'
import onko from '../../assets/images/Onkologiya.png'
import terapy from '../../assets/images/Terapiya.png'
import uro from '../../assets/images/Urologiya.png'



import clinic1 from '../../assets/images/clinic/clinic1.jpeg';
import clinic2 from '../../assets/images/clinic/clinic2.jpeg';
import clinic3 from '../../assets/images/clinic/clinic3.jpeg';
import clinic4 from '../../assets/images/clinic/clinic4.jpeg';
import BestDoctors from '../../components/BestDoctors/BestDoctors.jsx'




const Homepage = () =>{
    return(
        <div className= {styles.home}>

            <div className={styles.poster}>
                <div className= {styles.title}>
                    <h1>Добро пожаловать в клинику  MedCheck</h1>
                    <p>Международный Медицинская клиника «MedCheck — это клиника, в которой применяются новейшие диагностические и лечебные технологии и ведут прием лучшие специалисты.</p>
                    <button>ОСТАВЬТЕ ЗАЯВКУ</button>
                </div>

                <div className= {styles.picture}>
                    <img src = {doctorImage} alt= 'doctor'/>
                </div>
            </div>



            <div className= {styles.cards}>
                <h2>Почему <span>нас выбирают?</span></h2>

                <div className={styles.cardContainer}>
                    <Card title={'1'} subtitle={'Высокий профессионализм сотрудников'} text={'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.'}/>
                    <Card title={'1'} subtitle={'Высокий профессионализм сотрудников'} text={'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.'}/>
                    <Card title={'1'} subtitle={'Высокий профессионализм сотрудников'} text={'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.'}/>
                </div>
            </div>


            <div className= {styles.serviceSection}>
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
            </div>

            <div className= {styles.infoSection}>

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

            <div className={styles.bestDoctors}>
                <BestDoctors/>     
            </div>
            <div className={styles.form}>
            <div className={styles.forms}>
                <h1>Оставьте заявку</h1>
                <p>Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее время</p>
                <div className={styles.inputs}>
                    <div className={styles.input1}>
                        <div className={styles.text}>Как к Вам обратиться?</div>
                        <input type="text" placeholder='Введите имя' />
                        <img src={user} alt="user"/>
                    </div>
                    <div className={styles.input2}>
                        <div className={styles.text}>Номер мобильного телефона</div>
                       <div>
                        <input  type="text" placeholder='+996 (___) __-__-__' />
                        <img src={phone2} alt="phone" />
                    </div>
                    </div>
                   
                </div>

                <div className={styles.buttonCont}><button>ОТПРАВИТЬ ЗАЯВКУ</button><span><img src={send} alt="" /></span></div>
            </div>
            <div className={styles.images}>
                <img src={form} alt="" />
            </div>
        </div>




        </div>
    )
}




export default Homepage; 

