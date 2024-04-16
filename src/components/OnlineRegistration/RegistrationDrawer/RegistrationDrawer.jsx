import React, { useState, useEffect } from 'react';
import styles from './RegistrationDrawer.module.scss';
import remove from '../../../assets/icons/next.svg';
import calendar from '../../../assets/icons/calendar.svg';
import DoneRegistration from '../DoneRegistartionDrawer/DoneRegistration';
import dayjs from 'dayjs';
const RegistrationDrawer = ({ onClose, doctor, selectedDate, selectedTime }) => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        phoneNumber: '',
        email: ''
    });
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

    return (
        <>
            {showConfirmationModal ? (
                <DoneRegistration
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
                                        <p className={styles.doctorName}>{doctor.doctorName}</p>
                                        <p className={styles.doctorProf}>{doctor.doctorProf}</p>
                                    </div>
                                </div>
                                <div className={styles.calendar}>
                                    <img src={calendar} alt="calendar" />
                                    <div>
                                    <p>{selectedDate && dayjs(selectedDate).format('DD/MM/YYYY')}</p>

                                        <p>{selectedTime}</p>
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
