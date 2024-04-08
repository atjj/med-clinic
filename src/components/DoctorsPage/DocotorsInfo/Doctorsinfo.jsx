import styles from './Doctorsinfo.module.scss';
import container from '../../../styles/ContainerStyles.module.scss'
import DB from './db.json';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Line from '../../../UI/Line/Line.jsx'
const Doctorsinfo = () =>{
    return (
        <div className={styles.Doctorsinfo}>

            <div className={container.container}>
            <Line/>

                <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                <Link underline="hover" color="#346EFB" href="/">
                    Главная
                </Link>
                <Link underline="hover" color="#346EFB" href="/doctors">
                    Врачи
                </Link>
                <Typography color="text.primary">Гаталуский Артур</Typography>
                </Breadcrumbs>
                {DB.map((item,index)=>(
                <div className={styles.doctorInfo} key={index}>
                <h2>{item.name}</h2>
                <p className={styles.title}>Попасть в команду медицинской клиники «Medical Clinic» могут только лучшие специалисты с многолетней практикой и доказанным опытом.</p>
                <p className={styles.info__title}>Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в ведущих университетах Европы, чтобы еще на шаг стать ближе к совершенству.</p>
                <div className={styles.doctor}>
                    <div className={styles.doctorImage}><img width="100%" height='100%' src={item.img} alt="" /></div>
                    <div className={styles.titles}>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.branch}>Отделение: <span> {item.branch} </span></p>
                        <p className={styles.jobTitle}>Должность: <span>{item.jobtitle}</span> </p>
                        <button>Записаться на прием</button>
                    </div>
                </div>

                <p className={styles.listParagraph}>Преимущественно эстетическая хирургия лица:</p>
                <ul>
                    <li>эндоскопический лифтинг лица ( лоб, височные зоны, брови, верхние 2/3 лица )</li>
                    <li>SMAS-лифтинг лица с перемещением комков Биша, боковой или медиальной платизмопластикой</li>
                    <li>блефаропластика ( трансконъюнктивальная; расширенная с перераспределением тканей ,ревизионная )</li>
                    <li>повторные и ревизионные лифтинги лица </li>
                    <li>кантопексия</li>
                    <li>миопексия</li>
                    <li>липофилинг</li>
                    <li>отопластика</li>
                    <li>хейлопластика</li>
                </ul>



               
               
                <div className={styles.infoFooter}>
                    <span><a href=""> Список сотрудников</a></span>
                </div>
            </div>

            ))}
        </div>
        </div>
    )
}
export default Doctorsinfo;