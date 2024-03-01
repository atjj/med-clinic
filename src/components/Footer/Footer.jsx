import styles from  './Footer.module.scss';
import map from  '../../assets/icons/map.svg';
import time from  '../../assets/icons/time.svg';
import phone from  '../../assets/icons/phone.svg';
import post from  '../../assets/icons/post.svg';
import instag from '../../assets/icons/insta.svg';
import teleg from '../../assets/icons/teleg.svg';
import whats from '../../assets/icons/what.svg';

import medcheckLogowhite from '../../assets/logos/medcheckLogowhite.svg'



import { Link } from 'react-router-dom';


const Footer = () =>{
    return(
     <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footerMain}>
            <div className={styles.footerCol}>
            <div className={styles.about}>
                <div className={styles.logo}>
                    <Link to = '/'><img src = {medcheckLogowhite}/></Link>
                </div>
                <div className={styles.text}>
                    <div className={styles.text1}>
                    Медицинская клиника «MedCheck»
                    </div>
                    <div className={styles.text2}>
                    Международная Медицинская клиника «MedCheck» — 
                    это клиника, в которой применяются новейшие
                    диагностические и лечебные технологии и ведут 
                    прием лучшие специалисты.
                    </div>
                </div>

            </div>
            <div className={styles.info}>
                <div className={styles.contact}>
                    <div className={styles.contact_text}>
                        Контактная информация
                    </div>
                    <ul >
                        <li><div><img src={map} alt="" /></div><div>106452, г. Бишкек, Гражданская 119</div></li>
                        <li><div><img src={time} alt="" /></div><div>пн-сб 08:00 до 18:00</div></li>
                        <li >
                        <div className={styles.image}><img src={phone} alt="" /></div>
                        <div className={styles.liscContact}>
                        <p>+996(800) 000 000 </p>
                        <p>+996(505) 000 000</p></div>
                        </li>
                        <li><div><img src={post} alt="" /></div><div>medchek.kg</div></li>
                    </ul>
                </div>

                <div className = {styles.social}>
                    <div className = {styles.text} >
                        Мы в социальных сетях:
                    </div>
                    <div className={styles.links}>
                        <a href="*"><img src={instag} alt = "insta" /></a>
                        <a href="*"><img src={teleg}  alt = "tele" /></a>
                        <a href="*"><img src={whats}  alt = "what" /></a>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className= {styles.nav}>
                    <ul>
                        <li><Link to = '/about'>О клинике</Link></li>
                        <li><Link to = '/services'>Услуги</Link></li>
                        <li><Link to = '/doctors'>Врачи</Link></li>
                        <li><Link to = '/price'>Прайс</Link></li>
                        <li><Link to = '/contacts'>Контакты</Link></li>
                    </ul>
                </div>
                </div>
            
                <div className={styles.footerDown}> 
                    ©  MedCheck 2023 | Все права защищены
                </div>
        </div> 
        
     
            
    </div>
    )
}
export default Footer;