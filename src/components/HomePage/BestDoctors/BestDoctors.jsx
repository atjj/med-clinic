import DB from './db.json';
import styles from './BestDoctors.module.scss';
import Button from '../../../UI/Button/Button.jsx';

import {Link} from 'react-router-dom';

const BestDoctors = () =>{
    console.log(DB[0].name)
    return(
         <>

            <h2>Лучшие <span> врачи </span></h2>

            <p className={styles.title}>
               Попасть в команду медицинской клиники «MedCheck» могут
               только лучшие специалисты с многолетней практикой и доказанным опытом.
            </p>

            <div className={styles.doctorsData} > { DB.map( (e, i) => (

                <div className={styles.cards} key={i}>
                    <div>
                        <img src={e.img} alt="photo" />
                    </div>

                    <p>{e.name}</p>
                    <p className={styles.prof}>{e.prof}</p>
                </div>

            ))}
            </div>


            <div className={styles.btn}>
                <Link to = '/doctors'><Button text= "Все врачи клиники" radius = "small"/></Link>
            </div>
        </>
    )
}
export default BestDoctors;