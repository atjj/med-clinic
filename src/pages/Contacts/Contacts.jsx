import styles from './Contacts.module.scss'
import Mapp from '../../components/Contactspage/Mapp'
import container from '../../styles/ContainerStyles.module.scss'
const Contacts = () => {
  return (<>
    <div className={container.container}>
    <div className={styles.contacts}>
      <h2>Наши <span> контакты </span></h2>
      <p className={styles.title}>Комфорт и спокойствие пациента — это часть качественного лечения! Предупредите администратора, что вы едете к нам на машине и мы предложим бесплатную подземную парковку при нашей клинике.</p>
     
      <ul>
        <li>
          <p>Контактные номера:   </p>
          <span><a href="">+996(800) 000 000 ;  </a> <a href="">+996(505) 000 000</a></span></li>
        <li><p>Наш адрес: </p>
          <a href="">Кыргызстан, г. Бишкек, Медерова 44 </a></li>
        <li> <p>Режим работы клиники: </p>
          <a href="">Понедельник - суббота с 08:00 до 18:00.</a></li>
        <li><p>Электронная почта :  </p>
          <a href="">medchek.kg </a></li>
      </ul>
     
     
      
    </div>
    </div>
    <div className={styles.mapContainer}><Mapp
    /></div>
    </>
  )
}

export default Contacts
