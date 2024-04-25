import styles from './Results.module.scss';
import container from '../../styles/ContainerStyles.module.scss';
import Button from '../../UI/Button/Button.jsx';
import Line from '../../UI/Line/Line.jsx';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';
import Typography from '@mui/material/Typography';



const Results = () =>{
    return(
        <div className = {styles.wrapper}>
            <div className = {container.container}>

            <Line/>

            <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                <Link underline="hover" color="rgb(52, 110, 251)" href = "/">
                    Главная
                </Link>
                <Typography color="text.primary">Получить результаты</Typography>
            </Breadcrumbs>

                
                <div className= {styles.getresults}>
                    
                    <div className = {styles.inputs}>
                        <input className = {styles.input} placeholder='Последние 4 цифры'/>
                        <input className = {styles.input} placeholder='Кодовое слово'/>
                        <input type='email' className = {styles.input} placeholder='Email'/>

                    </div>


                    <div className= {styles.btn}>
                      <Button radius = "small" text= 'Получить результат'/>
                    </div>
                </div>
                 
            </div>
        
        </div>
    )
}


export default Results;