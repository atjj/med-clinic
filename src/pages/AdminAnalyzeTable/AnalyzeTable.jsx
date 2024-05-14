import { Button } from '@nextui-org/button';
import styles from './AnalyzeTable.module.scss';
import container from '../../styles/ContainerStyles.module.scss';



const AnalyzeTable = () => {
    return (
        <>
            <div className= {container.container}>

                <div className= {styles.header}>
                    <h1 className= {styles.head}>
                        Гематология
                    </h1>

                    <Button color='primary'>
                        {"Добавить  анализ"}
                    </Button>
                </div>

                
            
            </div>
        
        </>
    )
}



export default AnalyzeTable;