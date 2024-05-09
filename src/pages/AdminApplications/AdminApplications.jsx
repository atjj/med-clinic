import styles from './AdminApplications.module.scss'
import container from '../../styles/ContainerStyles.module.scss'
import AdminApplicationTable from './AdminApplicationTable.jsx'
const AdminApplications = () =>{
    return(
        <>
        <div className={styles.applications}>
               <div className={container.container}>
               <div className={styles.applicationAdmin}>
                    <h2 className={styles.applicationsTitle}>Заявки</h2>
                    <input type="text" placeholder='Поиск' className={styles.applicationsInput} />
                </div>
                <div className={styles.applicationsList}>
                       <AdminApplicationTable/> 
                </div>
            </div>

        </div>
        </>
    )
}
export default AdminApplications