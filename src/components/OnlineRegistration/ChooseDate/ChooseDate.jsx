import React, { useState } from 'react';
import styles from './ChooseDate.module.scss';
import remove from '../../../assets/icons/next.svg'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import timeSlots from './TimeSlots.json';
import Registration from '../Registration/Registration'; 

const ChooseDate = ({ doctor, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showRegistration, setShowRegistration] = useState(false); 

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    }

    const isContinueButtonVisible = selectedDate !== null && selectedTime !== null;

    const handleContinue = () => {
        setShowRegistration(true); 
    }

    return (
        <div className={styles.overlay} onClick={() => onClose()}>
            <div className={styles.drawer} onClick={(e) => { e.stopPropagation()}}>
                <div className={styles.headerRegistration}>
                    <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                    <p className={styles.headerTitle}>Выберите время записи</p>
                </div>
                
                <div className={styles.selectDoctorList}>
                    <div className={styles.selectDoctor}>
                        <img className={styles.doctorSelectedImage} style={{width: "60px", height: "60px"}} src={doctor.image} alt="selectDoctor" />
                        <div className={styles.doctorInfo}>
                            <p className={styles.doctorName}>{doctor.doctorName}</p>
                            <p className={styles.doctorProf}>{doctor.doctorProf}</p>
                        </div>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateCalendar']}>
                            <DateCalendar
                                referenceDate={dayjs('2024-04-02')}
                                views={['year', 'month', 'day']}
                                value={selectedDate}
                                onChange={handleDateSelect}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    {selectedDate &&
                        <div className={styles.timeSlotsContainer}>
                            {/* <p className={styles.timeSlotsTitle}>Выберите время:</p> */}
                            <div className={styles.timeSlotsList}>
                                {timeSlots.map((slot, index) => (
                                    <button key={index} className={styles.time} onClick={() => handleTimeSelect(slot.time)}>
                                        {slot.time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    }
                    {isContinueButtonVisible &&
                        <button className={styles.continueButton} onClick={handleContinue}>Продолжить</button>
                    }
                </div>
            </div>
            {showRegistration && (
                <Registration
                    doctor={doctor}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onClose={() => setShowRegistration(false)}
                />
            )}
        </div>    
    );
}

export default ChooseDate;
