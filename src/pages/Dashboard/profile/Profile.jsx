import styles from './Profile.module.scss';

import { Link, Outlet} from 'react-router-dom';

const Profile = () =>{



    return (
        <div className = {styles.profile}>
            <h2>Профиль</h2>
            
            <ul>
                <li><Link to = '/dashboard/profile/personalInfo'>Личные данные</Link></li>
                <li><Link to = '/dashboard/profile/changePwd'>Сменить пароль</Link></li>
            </ul>

            {/* <PersonalData/> */}
            <Outlet/>

        
        </div>
    )
}




export default Profile;