import styles from './Analize.module.scss';
import container from '../../styles/ContainerStyles.module.scss'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Allanalize from '../../components/Analizepage/Allanalize/Allanalize.jsx'
import Line from '../../UI/Line/Line.jsx';
import more from '../../assets/icons/more.svg'
const Analize = () =>{
    return (
        <div className={container.container}>
            <div className={styles.analize}>
            <Line />
            <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                <Link underline="hover" color="#346EFB" href="/">
                Главная
                </Link>
                <Typography color="text.primary">Анализы</Typography>
            </Breadcrumbs>
            <h1>Исследования:</h1>
            <input type="text" placeholder='Поиск по анализам' />
            <Allanalize/>
            <div className={styles.buttonCont}><button>Показать еще<span><img src={more} alt="" /></span></button></div>
            </div>  
        </div>
    )
}

export default Analize ;