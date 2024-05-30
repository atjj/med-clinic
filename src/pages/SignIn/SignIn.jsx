import Button from '../../UI/Button/Button.jsx';

import google from '../../assets/icons/google.svg';

import styles from './SignIn.module.scss';

import { useState,useRef,useEffect } from 'react';

import { fetchAuthData } from '../../services/network.js';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import show from '../../assets/icons/show_eye_icon_183818.svg';
import hide from '../../assets/icons/hide_icon_183794.svg';

import useAuth from '../../hooks/useAuth.jsx';
import Loading from '../../components/Loading/Loading.jsx';

const SignIn = () => {

    const {setAuth} = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [errorMsg,setErrorMsg] = useState('');
    const navigate = useNavigate();
   
    const [visiblePwd,setVisiblePwd] = useState(false);

    const [isLoading,setLoading] = useState(false);
    useEffect(() =>{
        userRef.current.focus();
    },[])



    useEffect(() => {
        setErrorMsg('');
    },[email,password])


    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        console.log('Отправка данных на сервер:', { email, password });

        const res = await fetchAuthData({email, password},'sign-in');
        console.log(res);

        if(res.ok && res.ok == undefined) {
            setErrorMsg('Something went wrong!');
            setLoading(false);
            return;
        }

        if(res.ok == false || !res) {
            console.log(res);
            setErrorMsg(res.errText);
            setLoading(false);
            return;

        } else {
            
            console.log('success',res);
            setLoading(false);


            setAuth({
                email: res.email,
                roles: res.roles,
                accessToken: res.accessToken,
                refreshToken: res.refreshToken
            });
    

            setEmail('');
            setPassword('');

            
            if(res.roles == 'PATIENT')
                navigate('/');

            if(res.roles == 'ADMIN')
                navigate('/admin/online-reg');

            if(res.roles == 'LABORANT')
                navigate('/laborant/patients');
            
        }

        
    };
    
    const handleLoginChange = (e) => {
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value); 
    };







    return (
        <div className= {styles.wrapper}>

            <form onSubmit={handleSubmit} className= {styles.signIn}>

                <p 
                    ref = {errRef} 
                    aria-live = "assertive"
                    className = {errorMsg ? `${styles.errMsgPanel}`: ``} 
                    >{errorMsg}</p>

                
                <h1 className= {styles.header}>Войти</h1>

                <input className = {styles.input}  
                       type = "text" 
                       id = "username"
                       ref = {userRef}
                       autoComplete='off'
                       placeholder = "Email"
                       value={email}
                       onChange={handleLoginChange}
                       required
                       />

                <div className= {styles.inputWrapper}>

                    <input className = {styles.pwdInput}  
                            type = {visiblePwd ? "text" : "password"} 
                            id = "password"
                            placeholder = "Пароль"
                            value = {password}
                            onChange = {handlePasswordChange}
                            required
                            />

                    <label 
                        className = {styles.visiblePwdIcon}
                        onClick = {() => { setVisiblePwd(!visiblePwd) }}
                    ><img src = {visiblePwd ? hide : show}/></label>
                </div>


                {isLoading ? <Loading/> :  <Button text = "ВОЙТИ" radius = 'small'/>}
                

                <div className = {styles.forgot}><a href='#'>Забыли пароль?</a></div>

                <div className= {styles.lines}>или</div>

                <button 
                    className= {styles.signinwithgoogle}><img src={google} alt='google' />Продолжить с Google
                </button>

                <div className= {styles.signup}>Нет аккаунта? <Link to = "/signup">Зарегистрироваться</Link></div>

            </form>
        </div>
    )
}



export default SignIn;