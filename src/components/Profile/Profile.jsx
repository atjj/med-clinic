import styles from './Profile.module.scss';


import profile from '../../assets/icons/profile.svg';

import { useState,useEffect,useRef, useContext } from 'react';

import DropDownBtn  from '../../UI/DropDownBtn/Button.jsx';

import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthProvider.jsx';

import { useNavigate } from 'react-router-dom';
 
const Profile = () => {

    const {auth,setAuth} = useContext(AuthContext);
    
    const [isOpen,setOpen] = useState(false);

    const loggedin = auth.accessToken ? true : false;


    let menuRef = useRef();

    const navigate = useNavigate();




    useEffect( () => {

        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        };

        document.addEventListener('mousedown',handler);
    })


    const logout = () => {
        const newObj = {...auth, email: '', roles: '', accessToken: "",refreshToken: ""};
        setAuth(newObj);
        navigate('/signin');
        localStorage.removeItem('site');
    }



    const toggleMenu = () => {setOpen(!isOpen)}






    return (
        <div className= {styles.profile} ref = {menuRef}>
            <DropDownBtn toggleMenu = {toggleMenu} icon = {profile}/>


            <div className = {`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
                <ul className= {styles.list}>
                    {!loggedin ? <List1/> : <List2 logout = {logout}/>}
                </ul>
            </div>
        </div>
    )
}




const List1 = () =>{
    return(
        <>
             <li><Link to = '/signin'>Войти</Link></li>
             <li><Link to = '/signup'>Регистрация</Link></li>
        </>
    )
}

const List2 = ({logout}) =>{
    return(
        <>
             <li><Link to = "/dashboard/records">Мои записи</Link></li>
             <li><Link to = "/dashboard/profile">Профиль</Link></li>
             <li onClick={logout}>Выйти</li>
        </>
    )
}


export default Profile;