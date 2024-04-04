import container from '../../styles/ContainerStyles.module.scss';
import { Outlet } from 'react-router-dom';
import Line from '../../UI/Line/Line';
const Dashboard = () =>{
    return(
        <>
            <div className= {container.container}>
                <Line/>
                <Outlet/>
            </div>
            
        </>
    )
}



export default Dashboard;