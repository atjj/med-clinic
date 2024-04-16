import styles from './CanceledModal.module.scss';
import { useState } from 'react';
const CanceledModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isCancelled, setIsCancelled] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const cancelRegistration = () => {
        setIsCancelled(true);
    };

    return (
        <>
           
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        <p className={styles.message}>Отмена записи</p>
                        <p className={styles.title}>После отмены запись будет невозможно восстановить</p>
                        <div className={styles.actions}>
                            <button className={styles.cancelButton} onClick={cancelRegistration}>Отменить запись</button>
                            <button className={styles.confirmButton} onClick={closeModal}>Закрыть</button>
                        </div>
                    </div>
                </div>
         
        </>
    );
};

export default CanceledModal;
