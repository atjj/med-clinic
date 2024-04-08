import styles from './Records.module.scss';
const Records = () =>{
    return(
    <>
        <h3 className = {styles.header}>Мои записи</h3>
        <div className = {styles.titles}>
            <span>Выбор специалиста</span>
            <span>Дата и время</span>
            <span>Статус</span>
        </div>
        <ul className= {styles.list}>
            <li className= {styles.listItem}>
                <div className = {styles.img}>
                    <img src= {''} alt = "image"/>
                    <div className= {styles.desc}>
                        <p className = {styles.name}>Манак Елена</p>
                        <p className = {styles.profi}>Окулист</p>
                    </div>
                </div>

                <div className= {styles.appointment}>
                    <p className= {styles.data}>12.01.2024</p>
                    <p className= {styles.time}>15.00</p>
                </div>

                <div className= {styles.status}>
                    <span>Статус</span>
                </div>
            </li>

            <li className= {styles.listItem}>
                <div className = {styles.img}>
                    <img src= {''} alt = "image"/>
                    <div className= {styles.desc}>
                        <p className = {styles.name}>Манак Елена</p>
                        <p className = {styles.profi}>Окулист</p>
                    </div>
                </div>

                <div className= {styles.appointment}>
                    <p className= {styles.data}>12.01.2024</p>
                    <p className= {styles.time}>15.00</p>
                </div>

                <div className= {styles.status}>
                    <span>Статус</span>
                </div>
            </li>

        </ul>


    </>
    )
}



export default Records;

