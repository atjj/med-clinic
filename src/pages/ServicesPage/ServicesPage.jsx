import styles from './ServicesPage.module.scss';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Link as RLink  } from 'react-router-dom';
import Form from '../../components/commonComponents/Form/Form';
import Line from '../../UI/Line/Line.jsx';
import ListItem from '../../UI/ServicesListItem/ListItem.jsx';

import medservicesDB from './medservicesDB.json';

import container from '../../styles/ContainerStyles.module.scss';
const ServicesPage = () => {
    console.log(medservicesDB)

    return (
        <div className= {container.container}>
            <div className = {styles.services}>

                <Line/>


                <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                    <Link underline="hover" color="#346EFB" href="/">
                        Главная
                    </Link>
                <Typography color="text.primary">Услуги</Typography>
                </Breadcrumbs>

                <h1>Наши <span>услуги</span></h1>

                <div className= {styles.servicesList}>
                    {medservicesDB.medservices.map(({id,img,title,alt}) => (
                    <RLink 
                            key = {id}
                            to = {`/services/${title}`}
                            >
                            <ListItem
                                    img = {img} 
                                    alt = {alt}  
                                    text = {title}
                            />
                    </RLink>
                    ))}        
                </div>

                <div className= {styles.questionSection}>

                    <h2>Часто задаваемые вопросы</h2>
                    
                    <p>Специалисты нашей клиники с удовольствием ответят на все ваши вопросы.Ниже представленны наиболее популярные.</p>

                    <Accordion style={{
                        marginTop: '16px'
                    }}>
                    <AccordionSummary
                    style={{ 
                            border: '1px solid "#346EFB"',
                            borderRadius: '10px', 
                            boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.15)',
                            background: "#346EFB",
                            color: 'white',
                            fontFamily: 'Manrope-Semi-Bold'
                        }}
                        expandIcon={<ArrowDownwardIcon style = {{backgroundColor: 'white',borderRadius: '100%',color:'rgb(4, 135, 65)'}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography style={{
                            fontSize: '20px'
                        }}>Как проходит процедура?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>



                    <Accordion style={{
                        marginTop: '16px'
                    }}>
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
                        }}>Показания</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>




                    <Accordion style={{
                        marginTop: '16px'
                    }}>
                    <AccordionSummary
                    style={{ 
                            border: '1px solid rgb(4, 135, 65)',
                            borderRadius: '10px', 
                            boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.15)',
                            background: 'rgb(4, 135, 65)',
                            color: 'white'
                        }}
                        expandIcon={<ArrowDownwardIcon style = {{backgroundColor: 'white',borderRadius: '100%',color:'rgb(4, 135, 65)'}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography style={{
                            fontSize: '20px'
                        }}>Противопоказания</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>





                    <Accordion style={{
                        marginTop: '16px'
                    }}>
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
                        }}>Насколько безопасно отбеливание Zoom 4?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>





                    <Accordion style={{
                        marginTop: '16px'
                    }}>
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
                        }}>Сколько держится результат?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                </div>


                <Form/>


            </div>
        </div>
    )
}




export default ServicesPage;