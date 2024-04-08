import styles from './FormButton.module.scss';

import send from '../../assets/icons/send.svg';

const FormButton = ({text}) =>{
    return (       
        <div className={styles.buttonCont}>
            <button>{text}</button><span>
            <img src={send} alt="sendbutton" /></span>
        </div>
    )
}



export default FormButton;