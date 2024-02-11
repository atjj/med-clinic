import DB from './db.json';
import styles from './BestDoctors.module.scss';

const BestDoctors = () =>{
    console.log(DB[0].name)
    return(
         <div className={styles.bestDoctors}>
            <h2>Лучшие <span> врачи </span></h2>
            <p className={styles.title}>Попасть в команду медицинской клиники «MedCheck» могут
               только лучшие специалисты с многолетней практикой и доказанным опытом.</p>
            <div className={styles.doctorsData}>{DB.map((e, i)=>(
                <div className={styles.cards} key={i}>
                <div><img width="223px" src={e.img} alt="" /></div>
                <p>{e.prof}</p>
                <p className={styles.prof}>{e.name}</p></div>
            ))}</div>
            <div className={styles.btn}>
            <button>Все врачи клиники</button></div>
        </div>
    )
}
export default BestDoctors;