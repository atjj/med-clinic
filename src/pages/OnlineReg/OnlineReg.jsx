import {Button} from "@nextui-org/button";

import styles from './OnlineReg.module.scss';
import TableComponent from "../../components/Admin/OnlineRegistration/Table/Table";
import Schedule from "../../components/Admin/OnlineRegistration/Schedule/Schedule";

import { useState } from "react";

import SearchPanel from '../../UI/SearchPanel/SearchPanel.jsx';
  



const OnlineReg = () => {

    const [activeTab, setActiveTab] = useState('online'); // По умолчанию активна вкладка "Онлайн-запись"

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };




    return (
        <div className= {styles.onlineReg}>

            <div className = {styles.header}>
                <h1 className= {styles.head}>Онлайн-запись</h1>
                
                <div className= {styles.btnGroup}>
                    {activeTab == 'schedule' ? <Button color="primary" variant="bordered"> EXPORT TO EXCEL </Button> : null}

                    <Button color="primary" startContent={""}>
                        {activeTab == 'online' ? "Добавить запись": "Сохранить"}
                    </Button> 
                </div>
            </div>


            <div className= {styles.subheader}>
                <ul>
                     <li className={activeTab === 'online' ? 'active' : ''} onClick={() => handleTabClick('online')}>Онлайн-запись</li>
                     <li className={activeTab === 'schedule' ? 'active' : ''} onClick={() => handleTabClick('schedule')}>Расписание</li>
                </ul>
            </div>

            <SearchPanel/>


            {activeTab === 'online' && <TableComponent />}
            {activeTab === 'schedule' && <Schedule/>}  
        </div>
    )
}





export default OnlineReg;