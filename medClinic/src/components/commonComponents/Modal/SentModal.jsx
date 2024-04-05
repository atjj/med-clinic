import styles from './Modal.module.scss'
const SentModal = () =>{
    return(
       
        <div className={styles.sentModal}>
           <h2>Заявка успешно отправлена!</h2>
           <p>В ближайшее время с вами свяжется администратор для согласования деталей.</p>
        </div>
        
    )
}
export default SentModal