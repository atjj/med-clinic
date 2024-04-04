import styles from './ServicePage.module.scss';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link  from '@mui/material/Link';
import Typography from '@mui/material/Typography';


import Line from '../../UI/Line/Line.jsx';
import Form from '../../components/commonComponents/Form/Form.jsx'
import { useParams } from 'react-router-dom';


import Button from '../../UI/Button/Button.jsx';

import container from '../../styles/ContainerStyles.module.scss';

const ServicePage = () => {

    const {id} = useParams();
   
    
    return (
        <div className= {container.container}>

            <div className = {styles.services}>
                    <Line/>

                    <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                        <Link underline="hover" color="rgb(52, 110, 251)" href="/">
                            Главная
                        </Link>
                        <Link underline="hover" color="rgb(52, 110, 251)" href="/services">
                            Услуги
                        </Link>
                    <Typography color="text.primary">{id}</Typography>
                    </Breadcrumbs>

                    

                    <h1 className= {styles.header}>Дерматология</h1>

                    <p className = {styles.descr}>
                        Дерматология – это раздел медицины, изучающий причины и механизмы развития заболеваний
                        кожи, волос, ногтей, слизистых оболочек, сальных и потовых желез. Врач дерматолог занимается
                        диагностикой и лечением врожденных и приобретенных патологий, связанных с нарушением
                        целостности кожных покровов, и исследует их взаимосвязь с другими сбоями в работе организма.
                    </p>


                    <h3>В каких случаях следует обращаться к дерматологу?</h3>

                    <p className= {styles.reason}>
                        Регулярные консультации и диагностические обследования необходимы пациентам, страдающим
                        врожденными и хроническими заболеваниями кожи. Также существует ряд симптомов и проблем,
                        при которых необходимо записаться к дерматологу:
                    </p>
                    <ul className= {styles.list}>
                        <li>угревая сыпь и другие высыпания;</li>
                        <li>нарушение пигментации;</li>
                        <li>шелушение, появление пятен на коже;</li>
                        <li>локализованный кожный зуд;</li>
                    </ul>

                    <h3>Какие болезни лечит дерматолог?</h3>

                    <p className= {styles.reason}>
                        Дерматолог в Бишкеке, занимается лечением широкого спектра
                        дерматологических заболеваний различного происхождения:
                    </p>
                    <ul className= {styles.list}>
                        <li>дерматозы, дерматиты;</li>
                        <li>псориаз;</li>
                        <li>витилиго (песь) и другие расстройства пигментации;</li>
                    </ul>


                    <div className= {styles.prices}>
                        <h3>Цены на прием <span>врача-дерматолога</span></h3>


                        <div className= {styles.pricetitle}>
                            <span>Услуга</span>
                            <span>Cтоимость</span>
                        </div>
                        <div className= {styles.priceitem}>
                            <span>Первичный прием врача-дерматолога</span>
                            <span>2300сом</span>
                        </div>

                        <div className= {styles.priceitem}>
                            <span>Первичный прием врача-дерматолога</span>
                            <span>2300сом</span>
                        </div>

                        <div className= {styles.priceitem}>
                            <span>Первичный прием врача-дерматолога</span>
                            <span>2300сом</span>
                        </div>



                    </div>

                    <div className= {styles.experts}>

                        <h1>Специалисты в данном направлении</h1>

                        <div className= {styles.wrapper}>
                            <div className= {styles.expert}>
                                <div>
                                    <img src = {`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MOfc0uicCtsL9itGYl9FQJ_E6PM3NnGipw&usqp=CAU`} alt = {` expert `}/>
                                </div>
                                
                                <div className= {styles.name}>Гаталуский Артур</div>
                                <div className= {styles.speciality}>Врач-дерматолог</div>
                                <div className = {styles.btn}>
                                     <Button text= 'Записаться на прием' radius= 'small' />
                                </div>
                            </div>

                            <div className= {styles.expert}>
                                <div>
                                    <img src = {`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MOfc0uicCtsL9itGYl9FQJ_E6PM3NnGipw&usqp=CAU`} alt = {` expert `}/>
                                </div>
                                
                                <div className= {styles.name}>Гаталуский Артур</div>
                                <div className= {styles.speciality}>Врач-дерматолог</div>
                                <div className = {styles.btn} >
                                    <Button text= 'Записаться на прием' radius= 'small' />
                                </div>
                            </div>

                            <div className= {styles.expert}>
                                <div>
                                    <img src = {`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MOfc0uicCtsL9itGYl9FQJ_E6PM3NnGipw&usqp=CAU`} alt = {` expert `}/>
                                </div>
                                
                                <div className= {styles.name}>Гаталуский Артур</div>
                                <div className= {styles.speciality}>Врач-дерматолог</div>
                                <div className = {styles.btn}>
                                    <Button text= 'Записаться на прием' radius= 'small' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Form/>

            </div> 




        
        </div>
    )
}



export default ServicePage;