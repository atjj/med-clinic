import styles from './PricePage.module.scss';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';

import container from '../../styles/ContainerStyles.module.scss';

import Line from '../../UI/Line/Line.jsx'



const PricePage = () =>{
    return(
        <div className= {container.container}>
            <Line/>

            <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                <Link underline="hover" color="rgb(4, 135, 65)" href="/">
                    Главная
                </Link>
            <Typography color="text.primary">Прайс</Typography>
            </Breadcrumbs>

            <h1>Наш <span>прайс</span></h1>

            <p className= {styles.desc}>
                Цены на услуги формируются в соответствии с действующими Прейскурантами.
                Общая стоимость зависит от объема услуг, оказываемых в рамках приёма.
                Объём оказываемых услуг определяется врачом, исходя из показаний для
                обследования и пожеланий клиента.
            </p>



            <div className= {styles.priceSection}>
                <Accordion>
                <AccordionSummary
                style={{ 
                         border: '1px solid rgb(4, 135, 65)',
                         borderRadius: '10px', 
                         boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.15)',
                         background: 'rgb(4, 135, 65)',
                         color: 'white',
                         fontFamily: 'Manrope-Semi-Bold'
                       }}
                    expandIcon={<ArrowDownwardIcon style = {{backgroundColor: 'white',borderRadius: '100%',color:'rgb(4, 135, 65)'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography style={{
                        fontSize: '20px'
                    }}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                </Accordion>
            </div>


        
        </div>
    )
}



export default PricePage;