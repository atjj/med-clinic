import Cancel from './Cancel';
import Canceled from './Canceled';
import styles from './CanceledModal.module.scss';
import { useState } from 'react';

const CanceledModal = ({ onClose }) => {
    const [cancelState, setCancelState] = useState(true);
    const [canceledState, setCanceledModal] = useState(false);

    const handleClose = () => {
        onClose(); // Закрыть модальное окно
    };

    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.content} onClick={(e) => { e.stopPropagation() }}>
                    {cancelState && <Cancel onClose={handleClose} setCancelState={setCancelState} setCanceledModal={setCanceledModal} />}
                    {canceledState && <Canceled onClose={handleClose} />}
                </div>
            </div>
        </>
    );
};

export default CanceledModal;
