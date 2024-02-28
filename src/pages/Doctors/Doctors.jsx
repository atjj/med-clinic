import DoctorProf from '../../components/DoctorsPage/DoctorProf';
import styles from './Doctors.module.scss';
import DB from './doctors.json';
import container from '../../styles/ContainerStyles.module.scss'
const Doctors = () => {
    return (
        <div className={styles.doctors}>
            <div className={container.container}>
            <h2>Наши <span> врачи </span></h2>
            <div className={styles.infoDoctors}>
                <p className={styles.paragraph1}>Попасть в команду медицинской клиники «Medical Clinic» могут только лучшие специалисты с многолетней практикой и доказанным опытом.</p>
                <p className={styles.paragraph2}>Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в ведущих университетах Европы, чтобы еще на шаг стать ближе к совершенству.</p>
            </div>
            {DB.map((item, index) => <DoctorProf key={index} data={item}/>)}
            <div className={styles.cardsFooter}>В нашей клинике работают: <span className={styles.number}> более 30 специалистов </span> <span className={styles.more}> Показать больше </span></div>
            </div>
        </div>
    );
}

export default Doctors;
