import { useState } from 'react';
import styles from './CanceledModal.module.scss';
import close from '../../../assets/icons/cancel.svg';
import ServiceListDrawer from '../ServiceListDrawer/ServiceListDrawer'; 
const Canceled = ( {onClose}) => {
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);


    const handleButtonClick = () => {
            setShowAnotherComponent(true);
    };
    const handleClose = () => {
        onClose(); // Закрыть модальное окно
    };

    return (
        <>
            {!showAnotherComponent ? (
                <div className={styles.canceled}>
                    <img className={styles.cancelImage} onClick={handleClose} src={close} alt="cancel" />
                    <p className={styles.canceledtitle}>Запись отменена</p>
                    <button className={styles.confirmButton} onClick={handleButtonClick}>
                        Записаться еще
                    </button>
                </div>
            ) : (
                <ServiceListDrawer />
            )}
        </>
    );
};

export default Canceled;
