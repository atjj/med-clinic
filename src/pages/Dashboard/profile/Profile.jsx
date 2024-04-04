import styles from './Profile.module.scss';

import Button from '../../../UI/Button/Button';


const Profile = () =>{
    return (
        <div className = {styles.profile}>
            <h2>Профиль</h2>

            <ul>
                <li>Личные данные</li>
                <li>Сменить пароль</li>
            </ul>

            <h3>Ваши личные данные</h3>

            <div className= {styles.personals}>
                <div className= {styles}>
                    <input type='text' disabled  value={"John"}/>
                    <input type='text' disabled value={"John@gmail.com"}/>
                </div>
                <div>
                    <input type='text' disabled value={"Taylor"}/>
                    <input type='text' disabled value={"+996(701) 010101"}/>

                </div>
            </div>
            <div className= {styles.btnPart}>
                    <Button text = "НАЗАД" radius = "small" />
                    <Button text = "РЕДАКТИРОВАТЬ" radius = "small" />
            </div>









        
        </div>
    )
}




export default Profile;