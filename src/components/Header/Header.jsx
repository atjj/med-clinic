import styles from'./Header.module.css';
import insta from '../../assets/icons/instagram.svg';
import tele from '../../assets/icons/telegram.svg';
import what from '../../assets/icons/whatsapp.svg';
import map from  '../../assets/icons/map.svg';
import time from  '../../assets/icons/time.svg';
import phone from  '../../assets/icons/phone.svg';
import cart from '../../assets/icons/cart.svg'
import logo from '../../assets/logos/medcliniclogo.svg'
import container from '../../styles/ContainerStyles.module.scss'
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button.jsx';
import ServiceListDrawer from '../OnlineRegistration/ServiceListDrawer/ServiceListDrawer.jsx'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
import Profile from '../Profile/Profile.jsx';
import { useState } from 'react';
const Header = () => {



    const {t} = useTranslation();

    const [isDoctorDrawerOpen, setIsDoctorDrawerOpen] = useState(false);

    const openDoctorDrawer = () => {
        setIsDoctorDrawerOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeDoctorDrawer = () => {
        setIsDoctorDrawerOpen(false);
        document.body.style.overflow = '';

    };


    
    return (
        <div className={container.container}>
        <div className={styles.header}>
            
            <div className={styles.searchPart}>
                    <div className={styles.geolocation}>
                        <div className={styles.map}>
                            <img src={map} alt="map" />
                            <span > {t('header.address')} </span>
                        </div>
                        <div className={styles.time}>
                            <img src={time} alt="time" />
                            <span>{t('header.workdays')}</span>
                        </div>
                    </div>
                            
                    <input className={styles.searchInput} type="search" placeholder={t('header.search')}/>
                            


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

                    
                    <LanguageSwitcher/>
                    <Link to="/cart"><img src={cart} alt="" /></Link>
                    <Profile />
            </div>


            <div className = {styles.navPart}>
                
                <div className= {styles.logo}>
                    <Link to = '/'><img src = {logo} alt = "logo"/></Link>
                </div>

                <div className= {styles.nav}>
                    <ul>
                        <li><Link to ='/about'>{t('header.about')}</Link></li>
                        <li><Link to ='/services'>{t('header.services')}</Link></li>
                        <li><Link to ='/doctors'>{t('header.doctors')}</Link></li>
                        <li><Link to ='/price'>{t('header.price')}</Link></li>
                        <li><Link to="/analize">{t('header.analize')}</Link></li>
                        <li><Link to ='/contacts'>{t('header.contacts')}</Link></li>

                    </ul>
                </div>

                <div className= {styles.buttons}>
                    <Link to = '/results' ><Button text = {t('header.getresults')} radius= "medium" /></Link>
                    <Button text = {t('header.online-recording')} handle = {openDoctorDrawer} radius= "medium" />
                    {isDoctorDrawerOpen && (
                        <ServiceListDrawer onClose={closeDoctorDrawer} />
                    )}
                </div>



            </div>


             
        </div>
            
            
        </div>

    )
}


export default Header;