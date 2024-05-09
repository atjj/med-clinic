import { useEffect, useState } from 'react';
import styles from './Records.module.scss';
import useAuth from '../../../hooks/useAuth';
const Records = () =>{

    const [appointments,setAppointments] = useState([]);
    const {auth} = useAuth();

    useEffect(() => {

        (async () => {

            const res = await fetch('https://medclinic-422605.uc.r.appspot.com/api/v1/appointments/myAppointments',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',   
                    "Authorization": `Bearer ${auth.accessToken}`   
                }
            });

            const data =  await res.json();

            setAppointments(data);
        })();
        console.log(appointments)
    },[]);



    return(
        <>
            <h3 className = {styles.header}>Мои записи</h3>
            <div className = {styles.titles}>
                <span>Выбор специалиста</span>
                <span>Дата и время</span>
                <span>Статус</span>
            </div>

            <ul className= {styles.list}>
                {appointments.map(({date,doctorResponse:{name,surname,image,positions},id,status,time}) =>   
                    (
                        
                            <li key = {id} className= {styles.listItem}>
                                <div className = {styles.img}>
                                     <img src= {image} alt = {name}/>
                                <div className= {styles.desc}>
                                    <p className = {styles.name}>{`${name} ${surname}`}</p>
                                    <p className = {styles.profi}>{positions}</p>
                                </div>
                                </div>

                                <div className= {styles.appointment}>
                                    <p className= {styles.data}>{`${date[0]}/${date[1]}/${date[2]}`}</p>
                                    <p className= {styles.time}>{time}</p>
                                </div>

                                <div className= {styles.status}>
                                    <span 
                                        className = {`
                                        
                                            ${status == 'Подтверждён' && styles.confirmed}
                                            ${status == 'Отменён' && styles.canceled}
                                            ${status == 'Завершён' && styles.canceled}
                                    `}> 
                                        {status}
                                    </span>
                                </div>
                            </li>                    
                    
                    )
                )}

            </ul>


        </>
    )
}



export default Records;

