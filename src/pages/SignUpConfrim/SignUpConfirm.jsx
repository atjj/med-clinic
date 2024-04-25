
import useAuth from '../../hooks/useAuth';
import styles from './SignUpConfirm.module.scss';
import { useState } from 'react';

import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';


const SignUpConfrim = () =>{

    const navigate = useNavigate();

    const {signUpConfirm,setAuth} = useAuth();

    const [token,setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Отправка данных на сервер:',{token, email: signUpConfirm.email});

        const res = await fetch(`http://medclinic-420017.uc.r.appspot.com/api/v1/auth/sign-up/confirm`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token,email: signUpConfirm?.email})
        });

        const data = await res.json();

        console.log('success', data);

        setAuth({
            email: data.email,
            roles: data.roles,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
        });

        navigate('/')

    }
    


    return (
        <div className = {styles.wrapper}>

            
            <form onSubmit = {handleSubmit} className= {styles.confrim}>
                <p className = {styles.message}> {signUpConfirm?.message}</p>

                <input 
                    className= {styles.input} 
                    type="email"
                    value={signUpConfirm?.email}
                    disabled
                    />

                <input className= {styles.input} 
                       type="text"
                       onChange = {(e) => {setToken(e.target.value)}}/>

                
                <Button text={'ПОТВЕРДИТЬ'} radius = 'medium'/>
            </form>

        </div>
    )
}


export default SignUpConfrim;