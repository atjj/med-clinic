import { useEffect,useState } from "react"

import styles from './TimeSlot.module.scss';
import useAuth from "../../../../hooks/useAuth";



const TimeSlot = ({id,selectedDate,handleTimeSelect}) => {

    const {auth} = useAuth();
    const [times,setTimes] = useState([]);
    console.log(selectedDate)
    useEffect(() =>{
        (async () => {
            const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/appointment/times?date=${selectedDate[0]}-${selectedDate[1] < 10 ? `0${selectedDate[1]}`: selectedDate[1]}-${selectedDate[2]}&scheduleId=${id}`,{
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}` 
                }
            });
            const data = await res.json();
            console.log(data);
            setTimes(data);
        })();
    },[])

 



    console.log(times);
    return(
        <div className={styles.timeSlotsList}>
            {times && times.map((slot, index) => (
                <button key={index} className={styles.time} onClick={() => handleTimeSelect(slot.time)}>
                    {slot.time}
                </button>
            ))}
        </div>
    
    )
}


export default TimeSlot;