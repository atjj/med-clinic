import styles from './Cards.module.scss';

import Card from '../../../UI/Card/Card.jsx'


const Cards = () =>{
    return (
        <div className= {styles.cards}>
            <h2>Почему <span>нас выбирают?</span></h2>

            <div className={styles.cardContainer}>
                <Card title={'1'} subtitle={'Высокий профессионализм сотрудников'} text={'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.'}/>
                <Card title={'1'} subtitle={'Высокий профессионализм сотрудников'} text={'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.'}/>
                <Card title={'1'} subtitle={'Высокий профессионализм сотрудников'} text={'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.'}/>
            </div>
        </div>
    )
}


export default Cards;