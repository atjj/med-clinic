import styles from './CanceledModal.module.scss';

const Cancel = ({ setCancelState, setCanceledModal, onClose }) => {
    
    const handleClick = () => {
        setCancelState(false);
        setCanceledModal(true);
    };

    const handleClose = () => {
        onClose(); // Закрыть модальное окно
    };

    return (
        <>
            <p className={styles.message}>Отмена записи</p>
            <p className={styles.title}>После отмены запись будет невозможно восстановить</p>
            <div className={styles.actions}>
                <button className={styles.cancelButton} onClick={handleClick}>Отменить запись</button>
                <button className={styles.confirmButton} onClick={handleClose}>Закрыть</button>
            </div>
        </>
    );
};

export default Cancel;
