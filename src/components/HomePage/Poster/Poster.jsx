import styles from './Poster.module.scss'

import doctorImage from '../../../assets/images/doctor.jpg'

const Poster = () =>{
    return(
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
    )
}



export default Poster;