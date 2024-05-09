import { useState, useEffect } from 'react';
import styles from './RegistrationDrawer.module.scss';
import remove from '../../../assets/icons/next.svg';
import calendar from '../../../assets/icons/calendar.svg';
import DoneRegistration from '../DoneRegistartionDrawer/DoneRegistration';
import dayjs from 'dayjs';

import useAuth from '../../../hooks/useAuth';
const RegistrationDrawer = ({ onClose, doctor, selectedDate, selectedTime,serviceId }) => {




    const {auth} = useAuth();

    console.log("selectedDate:", selectedDate);
    console.log("selectedDate:",dayjs(selectedDate).format('YYYY-MM-DD'))
    console.log("selectedTime:",selectedTime)
    console.log("serviceId:",serviceId)




    const [formValues, setFormValues] = useState({
        fullName: '',
        phoneNumber: '',
        email: ''
    });

    const [allFieldsFilled, setAllFieldsFilled] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const [appointmentRes,setAppointmentRes] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    

        console.log('sending:',{
            service_id: serviceId,
            doctor_id: doctor.doctor_id,
            date: selectedDate && dayjs(selectedDate).format('YYYY-MM-DD'),
            time: selectedTime,
            fullName: formValues.fullName,
            phoneNumber: formValues.phoneNumber,
            email: formValues.email
        });


    


        
        (async () => {
            const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/appointments/add`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                },
                body: JSON.stringify(
                    {
                        service_id: serviceId,
                        doctor_id: doctor.doctor_id,
                        date: selectedDate && dayjs(selectedDate).format('YYYY-MM-DD'),
                        time: selectedTime,
                        fullName: formValues.fullName,
                        phoneNumber: formValues.phoneNumber,
                        email: formValues.email
                      }
                )
            });
            const data = await res.json();
            setAppointmentRes(data);
        })();


        
        setShowConfirmationModal(true);
    };

    useEffect(() => {
        const { fullName, phoneNumber, email} = formValues;
        if (fullName && phoneNumber && email) {
            setAllFieldsFilled(true);
        } else {
            setAllFieldsFilled(false);
        }
    }, [formValues]);

    console.log(appointmentRes);


    return (
        <>
            {showConfirmationModal ? (
                <DoneRegistration
                    appointmentRes = {appointmentRes}
                    doctor={doctor}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onClose={() => setShowConfirmationModal(false)}
                />
            ) : (
                <div className={styles.overlay} onClick={onClose}>
                    <div className={styles.drawer} onClick={(e) => { e.stopPropagation() }}>
                        <div className={styles.headerRegistration}>
                            <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                            <p className={styles.headerTitle}>Заполните данные</p>
                        </div>

                        <div className={styles.Registration}>
                            <div className={styles.registrationDetails}>
                                <div className={styles.selectDoctor}>
                                    <img className={styles.doctorImage} style={{ width: '70px', height: '71px' }} src={doctor.image} alt="" />
                                    <div>
                                        <p className={styles.doctorName}>{`${doctor.name} ${doctor.surname}`}</p>
                                        <p className={styles.doctorProf}>{doctor.positions}</p>
                                    </div>
                                </div>
                                <div className={styles.calendar}>
                                    <img src={calendar} alt="calendar" />
                                    <div>
                                    <p>{selectedDate && dayjs(selectedDate).format('DD/MM/YYYY')}</p>

                                        <p>{selectedTime.substring(0,5)}</p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className={styles.fullForm}>
                                    <p className={styles.info}>Ваше имя и фамилия</p>
                                    <input className={styles.input} type="text" name="fullName" value={formValues.fullName} onChange={handleInputChange} placeholder='Ваше имя и фамилия' />
                                </div>
                                <div className={styles.fullForm}>
                                    <p className={styles.info}>Номер телефона</p>
                                    <input className={styles.input} type="text" name="phoneNumber" value={formValues.phoneNumber} onChange={handleInputChange} placeholder='Номер телефона' />
                                </div>
                                <div className={styles.fullForm}>
                                    <p className={styles.info}>Ваш e-mail</p>
                                    <input className={styles.input} type="text" name="email" value={formValues.email} onChange={handleInputChange} placeholder='Ваш e-mail' />
                                </div>
                                {allFieldsFilled && (
                                    <button type="submit" className={styles.submitButton}>Записаться</button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RegistrationDrawer;
