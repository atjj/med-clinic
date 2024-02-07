import styles from'./Header.module.css';
import insta from '../../assets/icons/instagram.svg';
import tele from '../../assets/icons/telegram.svg';
import what from '../../assets/icons/whatsapp.svg';
import profile from  '../../assets/icons/profile.svg';
import map from  '../../assets/icons/map.svg';
import time from  '../../assets/icons/time.svg';
import phone from  '../../assets/icons/phone.svg';

const Appheader = () =>{
    return(
 <div className={styles.header}>
    <div className={styles.geolocation}>
        <div className={styles.map}>
            <img src={map} alt="" />
            <div className={styles.maptext}>
                106452, г. Бишкек, Гражданская 119
            </div>
        </div>
        <div className={styles.time}>
            <img src={time} alt="" />
            <div className="time-text"><span style={{color:'#009344'}}>пн-сб</span> 08:00 до 18:00</div>
        </div>
    </div>
     
    <input className='input-with-svg' type="text" placeholder="Поиск по сайту  "/>
    

    <div className={styles.nav}>
        <a href="*"><img className={styles.contact} src={insta} alt="" /></a>
        <a href="*"><img className={styles.contact} src={tele} alt="" /></a>
        <a href="*"><img className={styles.contact} src={what} alt="" /></a>
    </div>

    <div className={styles.phone}>
        <div className={styles.phonenum}>
             <img src={phone} alt="" />
             <div className={styles.number}><a href="*">+996(800) 000 000</a></div>
        </div>
       <div className="number_2"><a href="*">+996(505) 000 000</a></div> {/* vopros */}
    </div>

   <div className={styles.profile}> <img src={profile} alt="" /></div>
    
    
 </div>

    )
}


export default Appheader;