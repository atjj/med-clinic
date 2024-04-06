import styles from './Modal.module.scss';
import user from '../../../assets/icons/Users.svg';
import phone2 from '../../../assets/icons/phone2.svg';
import send from '../../../assets/icons/send.svg';
import { useState } from 'react';

export const Application = ({ setApplicationModal, setSentModal }) => {
    const [name,setName]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const handleClick = () => {
        console.log(name, phoneNumber);
        setApplicationModal(false);
        setSentModal(true);
    };
    
    return (
        <> 
            <h1>Оставьте заявку</h1>
            <p>Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее время</p>

            <div className={styles.inputs}>
                <div className={styles.inputPanel}>
                    <div className={styles.text}>Как к Вам обратиться?</div>
                    <input  type="text" placeholder='Введите имя' onChange={(e)=>{setName(e.currentTarget.value)}}  />
                    <img src={user} alt="user" />
                </div>
                <div className={styles.inputPanel}>
                    <div className={styles.text}>Номер мобильного телефона</div>
                    <input  type="text" placeholder='+996 (___) __-__-__' onChange={(e)=>{setPhoneNumber(e.currentTarget.value)}}/>
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
