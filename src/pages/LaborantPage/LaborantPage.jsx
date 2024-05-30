import { Outlet } from "react-router-dom";
import styles from './LaborantPage.module.scss';


import container from '../../styles/ContainerStyles.module.scss';
import BasicMenu from "../../UI/BasicMenu/Menu";

import { Link } from "react-router-dom";

import logo from '../../assets/logos/medcliniclogo.svg';

const LaborantPage = () =>{
    return (
        <div className =  {styles.admin}>
            <div className = {container.container}>
                
                <div className= {styles.header}>
                    <div className= {styles.imgPanel}>
                        <Link to = {'/laborant'}><img src = {logo}/></Link>
                    </div>

                    <div className = {styles.nav}>
                        <ul>
                            <li><Link to={'/laborant/patients'}>Пациенты</Link></li>
                            <li><Link to={'/laborant/analyzes'}>Анализы</Link></li>
                        </ul>
                    </div>


                    <div>
                        <BasicMenu mainText = {"Лаборант"} menuItem = {['Выйти']}/>
                    </div>
                </div>


                <Outlet/>

            </div>
        
        </div>
    )
}



export default LaborantPage;