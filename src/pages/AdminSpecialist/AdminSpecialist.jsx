import styles from './AdminSpecialist.module.scss'
import container from '../../styles/ContainerStyles.module.scss'
import AdminSpecialistTable from './AdminSpecialistTable'
const AdminSpecialist = () =>{
    return (
        <>
        <div className={styles.applications}>
               <div className={container.container}>
               <div className={styles.applicationAdmin}>
                <div className={styles.headerSpecialist}>
                    <h2 className={styles.applicationsTitle}>Специалисты</h2>
                    <button className={styles.addSpecialistbutton}>+ ДОБАВИТЬ СПЕЦИАЛИСТА</button>
                </div>
                    <input type="text" placeholder='Поиск' className={styles.applicationsInput} />
                </div>
                <div className={styles.applicationsList}>
                       <AdminSpecialistTable/>
                </div>
            </div>

        </div>
        </>
    )
}
export default AdminSpecialist;