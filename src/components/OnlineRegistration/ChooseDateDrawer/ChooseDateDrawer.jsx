import { useEffect, useState } from 'react';
import styles from './ChooseDateDrawer.module.scss';
import remove from '../../../assets/icons/next.svg';
import dayjs from 'dayjs';
import calendar from '../../../assets/icons/calendar.svg';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
/* import timeSlots from './TimeSlots.json';*/
import RegistrationDrawer from '../RegistrationDrawer/RegistrationDrawer';
import useAuth from '../../../hooks/useAuth.jsx';

import TimeSlot from './TimeSlot/TimeSlot.jsx';

const ChooseDate = ({ doctor, onClose ,serviceId}) => {

    
    const {auth} = useAuth();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [showRegistration, setShowRegistration] = useState(false);
    const [showChooseDateTime, setShowChooseDateTime] = useState(false);
    const [isTimeSelected, setIsTimeSelected] = useState(false);
    const [showSoonTime, setShowSoonTime] = useState(true);

    const [doctorResponse,setDoctorResponse] = useState({});
    const [soon,setSoon] = useState([]);
    const [/* freedates */,setFreeDates] = useState({});

    useEffect(() =>{
        (async () => {

            const res = await fetch(`http://medclinic-420017.uc.r.appspot.com/api/v1/appointment/${doctor.doctor_id}`,{
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}` 
                }
            });
            const data = await res.json();

            setDoctorResponse(data.doctorResponse);
            setSoon(data.nearestTimeAndDateResponses);

        })();

        (async () => {
            const res = await fetch(`http://medclinic-420017.uc.r.appspot.com/api/v1/appointment/dates/${doctor.doctor_id}`,{
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}` 
                }
            });
            const data = await res.json();
            setFreeDates(data);
        })();





    },[])
   /*  console.log(freedates); */
 /*    console.log(soon);
    console.log(doctorResponse)
    console.log(selectedDate) */
 /*    console.log(selectedTime)
    console.log(dates);
    console.log(times) */
    console.log(selectedDate)
    console.log(soon);
    const handleDateSelect = (date) => {
        const {$D,$M,$y} = date;
        const arr = [];
        arr.push($y)
        arr.push($M)
        arr.push($D)
       
       
        setSelectedDate(arr);       
    };

    const handleTimeSelect = (time,date) => {
        setSelectedTime(time);
        setIsTimeSelected(true);
        setSelectedDate(date);
    };

    const isContinueButtonVisible = selectedDate !== null && selectedTime !== null;

    const handleContinue = () => {
        setShowRegistration(true);
    };

    const handleChooseDateTime = () => {
        setShowChooseDateTime(prevState => !prevState); 
        setShowSoonTime(!showSoonTime); 
    };

    console.log('selectedTime:',selectedTime);
    console.log('selectedDate:',selectedDate);
    return (
        <div className={styles.overlay} onClick={() => onClose()}>
            <div className={styles.drawer} onClick={(e) => { e.stopPropagation() }}>
                <div className={styles.headerRegistration}>
                    <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                    <p className={styles.headerTitle}>Выберите время записи</p>
                </div>

                <div className={styles.selectDoctorList}>
                    <div className={styles.selectDoctor}>
                        <img className={styles.doctorSelectedImage} style={{ width: "60px", height: "60px" }} src={doctorResponse.image} alt="selectDoctor" />
                        <div className={styles.doctorInfo}>
                            <p className={styles.doctorName}>{`${doctorResponse.name} ${doctorResponse.surname}`}</p>
                            <p className={styles.doctorProf}>{doctorResponse.positions}</p>
                        </div>
                    </div>

{/*                     <div className={styles.chooseDate} onClick={handleChooseDateTime}>
                        <img src={calendar} alt="calendar" />
                        <p>Выбрать дату и время</p>
                    </div> */}

                    {showChooseDateTime && (
                        <>
{/*                             <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar']}>
                                    <DateCalendar                            
                                        views={['year', 'month', 'day']}
                                        value={dayjs('2024-07-17')}
                                        onChange={handleDateSelect}
                                        style={{ width: '380px', background: 'white' ,borderRadius:'0px' , height:"300px" }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider> */}


{/*                             {selectedDate && (
                                <div className={styles.timeSlotsContainer}>
                                    <TimeSlot id = {doctor?.doctor_id} selectedDate = {selectedDate}  handleTimeSelect = {handleTimeSelect}/>
                            </div>
                            )} */}
                      {/*       {isContinueButtonVisible && (
                                <button className={styles.continueButton} onClick={handleContinue}>Продолжить</button>
                            )} */}
                  {/*           {showRegistration && (
                                <RegistrationDrawer
                                    doctor={doctor}
                                    selectedDate={selectedDate}
                                    selectedTime={selectedTime}
                                    onClose={() => setShowRegistration(false)}
                                />
                            )} */}
                            
                        </>
                    )}

                    {(soon && showSoonTime) && (
                        <div className={styles.soonTime}>
                            {
                                soon.length === 0 ? <div>Занят</div> : soon.map(({date,day,times}) => (
                                    <div key={date} className= {styles.soon}>
                                        <p className={styles.soonTimeTitle}>{`Ближайшее время для записи ${date}, ${day}:`}</p>
    
                                        <div className={styles.timeSlotsContainer}>
                                            <div className={styles.timeSlotsList}>
                                                {times.map((slot, index) => (
                                                <button key={index} className={styles.time} onClick={() => handleTimeSelect(slot,date)}>
                                                    {slot.substring(0,5)}
                                                </button>
                                            ))}
                                            </div>
                                        </div> 
                                    </div>
                                    ))

                            }
{/*                             <p className={styles.soonTimeTitle}>{`Ближайшее время для записи ${soon.date}, ${soon.day}:`}</p>

                            <div className={styles.timeSlotsContainer}>
                                <div className={styles.timeSlotsList}>
                                    {soon?.times?.map((slot, index) => (
                                        <button key={index} className={styles.time} onClick={() => handleTimeSelect(slot.time)}>
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div> */}

                            {isTimeSelected && (
                                <button className={styles.continueButton} onClick={handleContinue}>Продолжить</button>
                            )}
                            {showRegistration && (
                                <RegistrationDrawer
                                    doctor = {doctor}
                                    selectedDate={`${selectedDate} ${new Date().getFullYear()}`}
                                    selectedTime={selectedTime}
                                    onClose={() => setShowRegistration(false)}
                                    serviceId = {serviceId}
                                />
                            )}
                    
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChooseDate;
