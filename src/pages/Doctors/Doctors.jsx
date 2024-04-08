import DoctorProf from '../../components/DoctorsPage/DoctorsProf/DoctorProf.jsx';
import styles from './Doctors.module.scss';
import DB from './doctors.json';
import container from '../../styles/ContainerStyles.module.scss'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

import Line  from '../../UI/Line/Line.jsx';
const Doctors = () => {

    const [doctors,setDoctors] = useState([]); 

    useEffect(()=>{

        (async () =>{
             const res = await fetch('http://medcheck-415904.ey.r.appspot.com/api/admin/doctor/get-doctors')
             
             const d = await res.json();

             setDoctors(d);
             console.log(doctors);         
            
        })();
    
    
      },[]);



    return (
        <div className={styles.doctors}>
            <div className={container.container}>

            <Line/>
            <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                <Link underline="hover" color="rgb(52, 110, 251)" href="/">
                Главная
                </Link>
                <Typography color="text.primary">О клинике</Typography>
            </Breadcrumbs>  
              
            <h2>Наши <span> врачи </span></h2>
            <div className={styles.infoDoctors}>
                <p className={styles.paragraph1}>Попасть в команду медицинской клиники «Medical Clinic» могут только лучшие специалисты с многолетней практикой и доказанным опытом.</p>
                <p className={styles.paragraph2}>Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в ведущих университетах Европы, чтобы еще на шаг стать ближе к совершенству.</p>
            </div>
            {DB && DB.map((item, index) => <DoctorProf key={index} data={item}/>)}
            <div className={styles.cardsFooter}>В нашей клинике работают: <span className={styles.number}> более 30 специалистов </span> <span className={styles.more}> Показать больше </span></div>
            </div>
        </div>
    );
}

export default Doctors;
