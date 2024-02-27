import styles from './Form.module.scss';


import form from '../../../assets/images/form.png'
import user from '../../../assets/icons/Users.svg';
import phone2 from '../../../assets/icons/phone2.svg';
import send from '../../../assets/icons/send.svg';

const Form = () =>{
    return (
        <div className={styles.formSection}>

                <div className={styles.form}>

                                        
                <h1>Оставьте заявку</h1>

                <p>Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее время</p>

                <div className={styles.inputs}>
                    <div className={styles.inputPanel}>
                        <div className={styles.text}>Как к Вам обратиться?</div>
                        <input type="text" placeholder='Введите имя' />
                        <img src={user} alt="user"/>
                    </div>

                    <div className={styles.inputPanel}>
                        <div className={styles.text}>Номер мобильного телефона</div>
                        <input type="text" placeholder='+996 (___) __-__-__' />
                        <img src={phone2} alt="user"/>
                    </div>

                </div>


                <div className={styles.buttonCont}><button>ОТПРАВИТЬ ЗАЯВКУ</button><span><img src={send} alt="" /></span></div>
                </div>

                <div className={styles.images}>
                    <img src={form} alt="Woman" />
                </div>
        
        
        </div>
    
    )
}




export default Form;