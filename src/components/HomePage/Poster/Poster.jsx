import styles from './Poster.module.scss'

import doctorImage from '../../../assets/images/doctor.jpg'

import Button from '../../../UI/Button/Button.jsx';
import { useTranslation } from 'react-i18next';

const Poster = () =>{

    const {t} = useTranslation();

    return(
        <div className={styles.poster}>
            <div className= {styles.title}>
                <h1>{t('home.poster.title')}</h1>
                <p>{t('home.poster.subtitle')}</p>
                <div>
                    <Button text = {t('home.poster.request')} radius= "medium"/>
                </div>
            </div>

            <div className= {styles.picture}>
            <img src = {doctorImage} alt= 'doctor'/>
        </div>
        </div>
    )
}



export default Poster;