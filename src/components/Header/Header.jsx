import styles from'./Header.module.css';
import insta from '../../assets/icons/instagram.svg';
import tele from '../../assets/icons/telegram.svg';
import what from '../../assets/icons/whatsapp.svg';
import profile from  '../../assets/icons/profile.svg';
import map from  '../../assets/icons/map.svg';
import time from  '../../assets/icons/time.svg';
import phone from  '../../assets/icons/phone.svg';

import logo from '../../assets/images/logos/medcheckLogo.svg'





const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.searchPart} >
                    <div className={styles.geolocation}>
                        <div className={styles.map}>
                            <img src={map} alt="map" />
                            <span > 106452, г. Бишкек, Гражданская 119 </span>
                        </div>
                        <div className={styles.time}>
                            <img src={time} alt="time" />
                            <span>пн-сб 08:00 до 18:00</span>
                        </div>
                    </div>
                            
                    <input className={styles.searchInput} type="search" placeholder="Поиск по сайту  "/>
                            


                    <div className={styles.links}>
                        <a href="*"><img src={insta} alt = "insta" /></a>
                        <a href="*"><img src={tele}  alt = "tele" /></a>
                        <a href="*"><img src={what}  alt = "what" /></a>
                    </div>

                    <div className={styles.phoneNumbers}>
                        <div className={styles.number1}>
                            <img src={phone} alt="phone" />
                            <span>+996(800) 000 000</span>
                        </div>
                        <div className={styles.number2}>+996(505) 000 000</div> 
                    </div>

                    <div className={styles.profile}> 
                        <img src={profile} alt="profile" />
                    </div>
            </div>


            <div className = {styles.navPart}>
                
                <div className= {styles.logo}>
                    <img src = {logo}/>
                </div>

                <div className= {styles.nav}>
                    <ul>
                        <li>О клинике</li>
                        <li>Услуги</li>
                        <li>Врачи</li>
                        <li>Прайс</li>
                        <li>Контакты</li>
                    </ul>
                </div>

                <div className= {styles.buttons}>
                    <button className = {styles.btn1}>ПОЛУЧИТЬ РЕЗУЛЬТАТЫ</button>
                    <button className = {styles.btn2}>ЗАПИСЬ ОНЛАЙН</button>
                </div>



            </div>


             
        </div>
            
            
       

    )
}


export default Header;