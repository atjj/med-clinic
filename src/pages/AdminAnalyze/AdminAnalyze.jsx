import container from '../../styles/ContainerStyles.module.scss'
import styles from './AdminAnalyze.module.scss'
import SearchPanel from '../../UI/SearchPanel/SearchPanel';
import {Button} from "@nextui-org/button";

import trashCan from '../../assets/icons/trash.svg';

const  AdminAnalyze = () => {
    
    return (
        <>
            <div className = {container.container}>
                <div className = {styles.header}>
                    <h1 className= {styles.head}>Анализы</h1>

                    <Button color='primary'>
                        {"Добавить категорию анализов"}
                    </Button>
                </div>

                <SearchPanel/>


                <ul className= {styles.analyzesList}>
                    <li className= {styles.item}>

                            <div className= {styles.analyzeTitle}>
                                <span>1</span>
                                <span className= {styles.title}>Гематология</span>
                            </div>
                            <div className= {styles.action}>
                                <img src = {trashCan}/>
                            </div>
                    </li>
                </ul>


            </div>


        
        </>
    )
}



export default AdminAnalyze;