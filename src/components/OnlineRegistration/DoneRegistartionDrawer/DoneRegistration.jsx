import { useState } from 'react';
import styles from './DoneRegistration.module.scss';
import remove from '../../../assets/icons/next.svg';
import doneReg from '../../../assets/icons/doneRegistration.svg';
import CanceledModal from '../CanceledModal/CanceledModal';

const DoneRegistrationModal = ({appointmentRes,onClose }) => {
    
    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleCancel = () => {
        setShowCancelModal(false);
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.drawer} onClick={(e) => { e.stopPropagation() }}>
                <div className={styles.headerRegistration}>
                    <img className={styles.remove} src={remove} alt="close" onClick={onClose} />
                    <h2 className={styles.headerTitle}>Online запись</h2>
                </div>
                <div className={styles.modal}>
                    <img className={styles.done} src={doneReg} alt="done" />
                    <h2 className={styles.doneScedule}>Вы записаны</h2>
                    <p className={styles.selectedDataandTime}>{appointmentRes?.date?.join('/')}</p>
                    <p className={styles.selectedDataandTime}>{appointmentRes.dayOfWeek}, {appointmentRes.timeFrom}-{appointmentRes.timeTo}</p>
                    <p className={styles.selectedDoctor}>{appointmentRes?.response?.name} {appointmentRes?.response?.surName}</p>
                    
                    <p className={styles.cancel} onClick={() => setShowCancelModal(true)}>Отменить запись</p>

                    <button className={styles.moreScedules}>+ Записаться еще</button>
                </div>
                
            </div>
            {showCancelModal && <CanceledModal onClose={() => setShowCancelModal(false)} onCancel={handleCancel} />}
            
        </div>
    );
};

export default DoneRegistrationModal;
