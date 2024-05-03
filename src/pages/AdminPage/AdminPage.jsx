import { Outlet } from "react-router-dom";
import styles from './AdminPage.module.scss';


import container from '../../styles/ContainerStyles.module.scss';
import BasicMenu from "../../UI/BasicMenu/Menu";

import { Link } from "react-router-dom";

import logo from '../../assets/logos/medcliniclogo.svg';

const AdminPage = () =>{
    return (
        <div className =  {styles.admin}>
            <div className = {container.container}>
                
                <div className= {styles.header}>
                    <div className= {styles.imgPanel}>
                        <Link to = {'/'}><img src = {logo}/></Link>
                    </div>

                    <div className = {styles.nav}>
                        <ul>
                            <li><Link to={'/admin/online-reg'}>Онлайн-запись</Link></li>
                            <li><Link to={'/admin/applications'}>Заявки</Link></li>
                            <li><Link to={'/admin/specialists'}>Специалисты</Link></li>
                            <li><Link to={'/admin/analyzes'}>Пациенты</Link></li>
                        </ul>
                    </div>


                    <div>
                        <BasicMenu mainText = {"Администратор"} menuItem = {['Выйти']}/>
                    </div>
                </div>


                <Outlet/>

            </div>
        
        </div>
    )
}



export default AdminPage;