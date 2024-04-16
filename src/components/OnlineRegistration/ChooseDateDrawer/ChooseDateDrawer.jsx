import React, { useState } from 'react';
import styles from './ChooseDateDrawer.module.scss';
import remove from '../../../assets/icons/next.svg';
import dayjs from 'dayjs';
import calendar from '../../../assets/icons/calendar.svg';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import timeSlots from './TimeSlots.json';
import RegistrationDrawer from '../RegistrationDrawer/RegistrationDrawer';

const ChooseDate = ({ doctor, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showRegistration, setShowRegistration] = useState(false);
    const [showChooseDateTime, setShowChooseDateTime] = useState(false);
    const [isTimeSelected, setIsTimeSelected] = useState(false);
    const [showSoonTime, setShowSoonTime] = useState(true);

    const handleDateSelect = (date) => {
        setSelectedDate(dayjs(date));
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setIsTimeSelected(true);
    };

    const isContinueButtonVisible = selectedDate !== null && selectedTime !== null;

    const handleContinue = () => {
        setShowRegistration(true);
    };

    const handleChooseDateTime = () => {
        setShowChooseDateTime(prevState => !prevState); 
        setShowSoonTime(false); 
    };

    return (
        <div className={styles.overlay} onClick={() => onClose()}>
            <div className={styles.drawer} onClick={(e) => { e.stopPropagation() }}>
                <div className={styles.headerRegistration}>
                    <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                    <p className={styles.headerTitle}>Выберите время записи</p>
                </div>

                <div className={styles.selectDoctorList}>
                    <div className={styles.selectDoctor}>
                        <img className={styles.doctorSelectedImage} style={{ width: "60px", height: "60px" }} src={doctor.image} alt="selectDoctor" />
                        <div className={styles.doctorInfo}>
                            <p className={styles.doctorName}>{doctor.doctorName}</p>
                            <p className={styles.doctorProf}>{doctor.doctorProf}</p>
                        </div>
                    </div>

                    <div className={styles.chooseDate} onClick={handleChooseDateTime}>
                        <img src={calendar} alt="calendar" />
                        <p>Выбрать дату и время</p>
                    </div>

                    {showChooseDateTime && (
                        <>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar']}>
                                    <DateCalendar
                                        referenceDate={dayjs('2024-04-02')}
                                        views={['year', 'month', 'day']}
                                        value={selectedDate}
                                        onChange={handleDateSelect}
                                        style={{ width: '380px', background: 'white' ,borderRadius:'0px' , height:"300px" }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>


                            {selectedDate && (
                                <div className={styles.timeSlotsContainer}>
                                    <div className={styles.timeSlotsList}>
                                        {timeSlots.map((slot, index) => (
                                            <button key={index} className={styles.time} onClick={() => handleTimeSelect(slot.time)}>
                                                {slot.time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {isContinueButtonVisible && (
                                <button className={styles.continueButton} onClick={handleContinue}>Продолжить</button>
                            )}
                            {showRegistration && (
                                <RegistrationDrawer
                                    doctor={doctor}
                                    selectedDate={selectedDate}
                                    selectedTime={selectedTime}
                                    onClose={() => setShowRegistration(false)}
                                />
                            )}
                            
                        </>
                    )}

                    {showSoonTime && (
                        <div className={styles.soonTime}>
                            <p className={styles.soonTimeTitle}>Ближайшее время для записи 12 января, среда:</p>

                            <div className={styles.timeSlotsContainer}>
                                <div className={styles.timeSlotsList}>
                                    {timeSlots.map((slot, index) => (
                                        <button key={index} className={styles.time} onClick={() => handleTimeSelect(slot.time)}>
                                            {slot.time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {isTimeSelected && (
                                <button className={styles.continueButton} onClick={handleContinue}>Продолжить</button>
                            )}
                            {showRegistration && (
                                <RegistrationDrawer
                                    doctor={doctor}
                                    selectedDate={'2024-04-02'}
                                    selectedTime={selectedTime}
                                    onClose={() => setShowRegistration(false)}
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
