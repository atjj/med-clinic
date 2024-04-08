import styles from './Modal.module.scss';
import close from '../../../assets/icons/close.svg';
import { Application } from './Application.jsx';
import SentModal from './SentModal.jsx';
import {  useState,useEffect,useRef } from 'react';

const Modal = ({ toggleModal }) => {
    const [applicationState, setApplicationState] = useState(true);
    const [sentModal, setSentModal] = useState(false);
    
    return (
        <div className={styles.modal} onClick={()=>toggleModal()}>
            <div className={styles.modalWrapper}>
                <div className={styles.modalContent} onClick={(e)=>{e.stopPropagation()}}>
                    <img onClick={toggleModal} className={styles.modalCloseButton} src={close} alt="" />

                    {applicationState && <Application setApplicationModal={setApplicationState} setSentModal={setSentModal} />}
                    {sentModal && <SentModal />}
                </div>
            </div>
        </div>
    );
};

export default Modal;

