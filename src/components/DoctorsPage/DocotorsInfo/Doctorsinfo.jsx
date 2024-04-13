import styles from './Doctorsinfo.module.scss';
import container from '../../../styles/ContainerStyles.module.scss'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Line from '../../../UI/Line/Line.jsx'
import reviews from './reviews.json';
import Button from '../../../UI/Button/Button.jsx';

import CommentList from '../CommentList/CommentList.jsx';
import CommentForm from '../CommentForm/CommentForm.jsx';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const Doctorsinfo = () => {

    let {id} = useParams();
    
    const [info,setInfo] = useState({});

    useEffect(() =>{
        const getDoctor = async () => {
            const res = await fetch(`http://medclinic-420017.uc.r.appspot.com/api/v1/doctor/get-doctor-by-id/${id}`);
            const data = await res.json();
            setInfo(data);

        }
        getDoctor();
    },[]);

    const {image,name,surName,service,description,grade,position} = info;
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
                            <Typography color="text.primary">{`${name} ${surName}`}</Typography>
                        </Breadcrumbs>


            <div className={styles.doctorInfo}>
                    <h2 className= {styles.header}>{`${name} ${surName}`}</h2>
                    <p className={styles.title}>Попасть в команду медицинской клиники «Medical Clinic» могут только лучшие специалисты с многолетней практикой и доказанным опытом.</p>
                    <p className={styles.info__title}>Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в ведущих университетах Европы, чтобы еще на шаг стать ближе к совершенству.</p>
                    <div className={styles.doctor}>
                        <div className={styles.doctorImage}><img width="100%" height='100%' src={image} alt = {`${name} ${surName}`} /></div>
                        <div className={styles.titles}>
                            <p className={styles.name}>{`${name} ${surName}`}</p>
                            <p className={styles.branch}>Отделение: <span> {service} </span></p>
                            <p className={styles.jobTitle}>Должность: <span>{position}</span> </p>
                            <Button text = {"Записаться на прием"} radius={'small'}/>
                        </div>
                    </div>

                    <div className = {styles.details}>
                        {description}


                        <div className={styles.infoFooter}>
                            <span><a href=''> Список сотрудников</a></span>
                        </div>

                    </div>
            </div>
                        




                        <div className= {styles.commentSection}>

                            <h2>Отзывы клиентов</h2>
                            <CommentList items = {reviews}/>
    
                    
                            <CommentForm/>
                    

                        </div>


            </div>








    </div>
    )
}
export default Doctorsinfo;