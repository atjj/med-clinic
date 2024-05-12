import styles  from './AdminSpecialist.module.scss'
import image from '../../assets/icons/savephoto.svg'
import Button from '../../UI/Button/Button';
import CancelButton from '../../UI/CancelButton/CancelButton';
import SpecialistToggleButton from './SpecialistToggleEdit.jsx'
const AdminSpecialistEdit = () =>{
    return(
        <div className={styles.globalAdding}>
            <h3 className={styles.header}>Добавление специалиста</h3>
            <div className={styles.addingDoctors}>
                <div className={styles.addImage}>
                    <img src={image} alt="doctorImage" />
                    <p className={styles.title}>Нажмите для добавления фотографии</p>
                </div>

                <div className={styles.infoDoctors}>
                    <h4 className={styles.infoDoctorsHeader}>Личные данные</h4>
                    
                    <div className={styles.addSpecialistInput}>
                        <input className={styles.inputAddSpecialist} placeholder='Напишите имя' type="text" />
                        <input className={styles.inputAddSpecialist} placeholder='Напишите фамилию' type="text" />
                        <input className={styles.inputAddSpecialist} placeholder='Выберите отделение' type="text" />
                        <input className={styles.inputAddSpecialist} placeholder='Напишите должность' type="text" />
                    </div>
                    <div>
                        <SpecialistToggleButton/>
                    </div>
                    <div className={styles.addSpecialistButton}>
                    
                        <CancelButton radius= "small" text='назад'/>
                        <Button text='Редактировать' radius= "small"/>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
export default AdminSpecialistEdit