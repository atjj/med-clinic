import styles from './Poster.module.scss'

import doctorImage from '../../../assets/images/doctor.jpg'

import Button from '../../../UI/Button/Button.jsx';

const Poster = () =>{
    return(
        <div className={styles.poster}>
            <div className= {styles.title}>
                <h1>Добро пожаловать в клинику  MedCheck</h1>
                <p>Международный Медицинская клиника «MedCheck — это клиника, в которой применяются новейшие диагностические и лечебные технологии и ведут прием лучшие специалисты.</p>
                <div>
                    <Button text = {"ОСТАВЬТЕ ЗАЯВКУ"} radius= "medium"/>
                </div>
            </div>

            <div className= {styles.picture}>
            <img src = {doctorImage} alt= 'doctor'/>
        </div>
        </div>
    )
}



export default Poster;