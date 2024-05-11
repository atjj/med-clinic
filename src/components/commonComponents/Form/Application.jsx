import styles from './Form.module.scss';
import user from '../../../assets/icons/Users.svg';
import phone2 from '../../../assets/icons/phone2.svg';
import send from '../../../assets/icons/send.svg';
import { useState } from 'react';
import axios from 'axios';

export const Application = ({ setApplicationModal, setSentModal }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.post('http://medclinic-422605.uc.r.appspot.com/api/v1/application/add-application', {
                name: name,
                phoneNumber: phoneNumber,
            });

            console.log('Заявка успешно отправлена');
            console.log(name,phoneNumber)
            setApplicationModal(false);
            setSentModal(true);
        } catch (error) {
            console.error('Произошла ошибка при отправке заявки:', error.message);
        }
    };

    return (
        <> 
            <h1>Оставьте заявку</h1>
            <p>Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее время</p>

            <div className={styles.inputs}>
                <div className={styles.inputPanel}>
                    <div className={styles.text}>Как к Вам обратиться?</div>
                    <input type="text" placeholder='Введите имя' onChange={(e) => { setName(e.currentTarget.value) }} />
                    <img src={user} alt="user" />
                </div>
                <div className={styles.inputPanel}>
                    <div className={styles.text}>Номер мобильного телефона</div>
                    <input type="text" placeholder='Введите телефон номер' onChange={(e) => { setPhoneNumber(e.currentTarget.value) }} />
                    <img src={phone2} alt="user" />
                </div>
            </div>

            <div className={styles.buttonCont}>
                <button onClick={() => handleClick()}>ОТПРАВИТЬ ЗАЯВКУ
                    <img src={send} alt="sendbutton" />
                </button>
            </div>
        </>
    );
};