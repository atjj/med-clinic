import styles from './Form.module.scss';
import form from '../../../assets/images/form.png'
import { Application } from './Application.jsx';
import SentModal from './SentModal.jsx';
import { useState } from 'react';
const Form = () =>{
    const [applicationState, setApplicationState] = useState(true);
    const [sentModal, setSentModal] = useState(false);
    
    return (
        <div div className={styles.modal}>
        <div  >
            <div className={styles.modalWrapper}>
                <div className={styles.modalContent} >

                    {applicationState && <Application setApplicationModal={setApplicationState} setSentModal={setSentModal} />}
                    {sentModal && <SentModal />}
                </div>
            </div>
        </div>
        <div className={styles.images}>
                        <img src={form} alt="Woman" />
                    </div>
        </div>
    );
    
}




export default Form;